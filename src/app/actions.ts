'use server';

import { z } from 'zod';
import { recommendOptimalServices } from '@/ai/flows/recommend-optimal-services';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  inquiryType: z.enum(['job-seeker', 'employer']),
  goal: z.string().min(10),
  message: z.string().optional(),
});

export type State = {
  status: 'idle' | 'pending' | 'success' | 'error';
  message: string;
  recommendation?: string | null;
};

export async function submitInquiry(prevState: State, formData: FormData): Promise<State> {
  try {
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
      };
    }
    
    // Artificial delay to show pending state
    await new Promise(resolve => setTimeout(resolve, 1000));

    const { goal } = validatedFields.data;

    const recommendationResult = await recommendOptimalServices({ userGoal: goal });

    // In a real app, you would save the inquiry to a database, send an email, etc.
    // For this example, we'll just log it and return the AI recommendation.
    console.log('New Inquiry:', validatedFields.data);

    return {
      status: 'success',
      message: 'Your inquiry has been sent successfully. We will get back to you shortly.',
      recommendation: recommendationResult.recommendedServices,
    };
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
