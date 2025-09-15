"use client";

import Image from 'next/image';
import { Briefcase, Globe, Smile, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedSection from '../animated-section';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { icon: <Briefcase className="w-8 h-8 text-accent" />, value: 10, label: 'Years Experience' },
  { icon: <UserCheck className="w-8 h-8 text-accent" />, value: 5000, label: 'Placements' },
  { icon: <Globe className="w-8 h-8 text-accent" />, value: 20, label: 'Countries Served' },
  { icon: <Smile className="w-8 h-8 text-accent" />, value: 100, label: 'Client Satisfaction', suffix: '%' },
];

const Counter = ({ to, suffix = '' }: { to: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = to;
    if (start === end) return;

    const duration = 2000;
    const incrementTime = (duration / end) < 1 ? 1 : (duration / end);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 50));
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(timer);
  }, [to, inView]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};


export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-professionals');

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            )}
          </AnimatedSection>
          <AnimatedSection delay="delay-200">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Your Trusted Partner in Global Mobility
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              With over 10 years of expertise, SNK Overseas specializes in manpower solutions, connecting ambitious Indians with opportunities in construction, hospitality, oil & gas, and more. We handle visas, training, and placements with integrity.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="border-l-4 border-primary bg-secondary/50">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                    {stat.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">
                       <Counter to={stat.value} suffix={stat.suffix} />
                       {stat.value >= 5000 && '+'}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
