"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';
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

const GlobeDemo = dynamic(() => import('@/registry/magicui/globe-demo').then((m) => m.GlobeDemo), { ssr: false });

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-professionals');

  return (
    <section id="about" className="content-section bg-background scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl">
              <div className="absolute w-full bottom-0 inset-x-0 h-20 bg-gradient-to-b pointer-events-none select-none from-transparent to-background z-10" />
              <div className="relative w-full h-[22rem] md:h-[28rem]">
                <GlobeDemo />
              </div>
            </div>
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
                <Card key={stat.label} className="group relative border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-lg" />
                  <CardHeader className="relative flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                    <div className="text-primary/80">{stat.icon}</div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
