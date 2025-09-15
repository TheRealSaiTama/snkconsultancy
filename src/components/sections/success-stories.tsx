"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedSection from '../animated-section';
import { Button } from '../ui/button';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh K.',
    avatarId: 'testimonial-avatar-1',
    rating: 5,
    quote: "SNK made my dream job in Dubai possible—grateful forever! The process was smooth and they supported me at every step.",
  },
  {
    id: 2,
    name: 'Priya S.',
    avatarId: 'testimonial-avatar-2',
    rating: 5,
    quote: "As an employer, finding reliable talent from India was a challenge. SNK Overseas delivered exceptional candidates for our construction projects in Qatar.",
  },
  {
    id: 3,
    name: 'Amit V.',
    avatarId: 'testimonial-avatar-3',
    rating: 5,
    quote: "From visa assistance to pre-departure training, everything was handled professionally. Highly recommend their services to anyone seeking a job in Europe.",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section id="success" className="bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Real Stories, Real Impact</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Hear from the people whose lives we've changed and the partners who trust us.
          </p>
        </AnimatedSection>

        <AnimatedSection delay="delay-200" className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const avatar = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="flex flex-col items-center justify-center text-center p-6">
                        {avatar && (
                          <Image
                            src={avatar.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={avatar.imageHint}
                            width={80}
                            height={80}
                            className="rounded-full mb-4"
                          />
                        )}
                        <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                        <div className="mt-4">
                            <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                            <div className="flex justify-center mt-1">
                                {Array(testimonial.rating).fill(0).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-400" className="mt-16">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="mailto:info.snkoverseas@gmail.com?subject=Inquiry about Current Vacancies">View Current Vacancies</Link>
            </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
