'use server';

/**
 * @fileOverview A service recommendation AI agent.
 *
 * - recommendOptimalServices - A function that recommends optimal services based on user goals.
 * - RecommendOptimalServicesInput - The input type for the recommendOptimalServices function.
 * - RecommendOptimalServicesOutput - The return type for the recommendOptimalServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendOptimalServicesInputSchema = z.object({
  userGoal: z
    .string()
    .describe('The user provided goals for SNK Global services.'),
});
export type RecommendOptimalServicesInput = z.infer<
  typeof RecommendOptimalServicesInputSchema
>;

const RecommendOptimalServicesOutputSchema = z.object({
  recommendedServices: z
    .string()
    .describe('The recommended services based on the user goal.'),
});
export type RecommendOptimalServicesOutput = z.infer<
  typeof RecommendOptimalServicesOutputSchema
>;

export async function recommendOptimalServices(
  input: RecommendOptimalServicesInput
): Promise<RecommendOptimalServicesOutput> {
  return recommendOptimalServicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendOptimalServicesPrompt',
  input: {schema: RecommendOptimalServicesInputSchema},
  output: {schema: RecommendOptimalServicesOutputSchema},
  prompt: `You are an expert consultant at SNK Global, specializing in manpower solutions. A user will provide a goal, and you will recommend the most suitable services offered by SNK Global to help them achieve that goal.

User Goal: {{{userGoal}}}

Consider the following services offered by SNK Global:
- Recruitment
- Visa Assistance
- Training
- Placement

Based on the user goal, recommend the most relevant services.
`,
});

const recommendOptimalServicesFlow = ai.defineFlow(
  {
    name: 'recommendOptimalServicesFlow',
    inputSchema: RecommendOptimalServicesInputSchema,
    outputSchema: RecommendOptimalServicesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
