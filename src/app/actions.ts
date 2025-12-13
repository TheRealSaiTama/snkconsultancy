'use server';

import { z } from 'zod';
import { recommendOptimalServices } from '@/ai/flows/recommend-optimal-services';
import nodemailer from 'nodemailer';

// --- BEST PRACTICE 2: Add specific error messages to your Zod schema ---
// This allows you to provide more helpful feedback to the user on the client-side, if you choose to.
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  inquiryType: z.enum(['job-seeker', 'employer']),
  goal: z.string().min(10, { message: 'Your goal should be at least 10 characters long.' }),
  message: z.string().optional(),
});

export type State = {
  status: 'idle' | 'pending' | 'success' | 'error';
  message: string;
  recommendation?: string | null;
};

export async function submitInquiry(prevState: State, formData: FormData): Promise<State> {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO;

  if (!emailUser || !emailPass || !emailTo) {
    return {
      status: 'error',
      message:
        'Email service is not configured. Please try again later or contact us directly.',
      recommendation: null,
    };
  }

  // 1. Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    inquiryType: formData.get('inquiryType'),
    goal: formData.get('goal'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Invalid form data. Please check your entries and try again.',
      recommendation: null, // Clear any previous recommendation on error
    };
  }

  const { name, email, inquiryType, goal, message } = validatedFields.data;

  try {
    // 2. Configure the email transporter using credentials from .env.local
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: emailUser, // The email address you send from
        pass: emailPass, // The 16-character App Password
      },
    });

    const inquiryTypeDisplay = inquiryType === 'job-seeker' ? 'Job Seeker' : 'Employer';

    // 3. Create the email content with UX and deliverability improvements
    const mailOptions = {
      from: `"${name} via SNK Global" <${emailUser}>`,
      to: emailTo,
      // --- BEST PRACTICE 3: Set `replyTo` for seamless communication ---
      // When you hit "Reply" in your inbox, the response will go to the user's email, not your own.
      replyTo: email,
      subject: `New Inquiry from ${name} (${inquiryTypeDisplay})`,
      text: `
        You have a new inquiry from the SNK Global website:

        Name: ${name}
        Email: ${email}
        Role: ${inquiryTypeDisplay}

        Primary Goal:
        ${goal}

        Additional Message:
        ${message || 'N/A'}
      `,
      // --- BEST PRACTICE 4: Improved HTML for better readability in email clients ---
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Role:</strong> ${inquiryTypeDisplay}</p>
          <p><strong>Primary Goal:</strong></p>
          <blockquote style="margin: 0 0 1em 1em; padding-left: 1em; border-left: 3px solid #eee;">${goal}</blockquote>
          <p><strong>Additional Message:</strong></p>
          <blockquote style="margin: 0 0 1em 1em; padding-left: 1em; border-left: 3px solid #eee;">${message || '<i>No additional message provided.</i>'}</blockquote>
          <hr>
          <p style="font-size: 0.9em; color: #777;"><em>This inquiry was submitted through the "Ready to Connect Globally" form.</em></p>
        </div>
      `,
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    // 5. Get AI recommendation (your existing custom logic)
    const recommendationResult = await recommendOptimalServices({ userGoal: goal });

    return {
      status: 'success',
      message: 'Your inquiry has been sent successfully. We will get back to you shortly.',
      recommendation: recommendationResult.recommendedServices,
    };
  } catch (error) {
    // --- BEST PRACTICE 5: More specific error logging for debugging ---
    console.error('Failed to send email or process inquiry:', error);
    return {
      status: 'error',
      message: 'An unexpected error occurred while sending your message. Please try again later.',
      recommendation: null,
    };
  }
}
