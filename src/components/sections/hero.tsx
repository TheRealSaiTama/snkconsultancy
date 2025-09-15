"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SvgIcon } from '../icons';

export default function HeroSection() {
  const heroBg = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            data-ai-hint={heroBg.imageHint}
            fill
            className="object-cover filter blur-sm"
            priority
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/50 to-primary/80" />
        <div className="absolute inset-0">
          <SvgIcon.FlightPath className="w-full h-full opacity-50" />
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
          Unlock Global Opportunities for Indian Talent
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-primary-foreground/90 md:text-xl animate-fade-up animation-delay-300">
          We bridge needy individuals from India to rewarding jobs in the Middle East and Europe—seamless recruitment, expert guidance.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-500">
          <Button asChild size="lg" className="transition-transform hover:scale-105">
            <Link href="#services">For Employers: Hire Talent</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
            <Link href="#success">For Job Seekers: Find Jobs</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-8 w-8 text-white animate-bounce" />
      </div>
    </section>
  );
}
