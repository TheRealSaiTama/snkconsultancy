"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../animated-section';

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 opacity-50" />
            <div className="relative border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 lg:p-16 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black leading-tight">
                    <span className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
                      Transform Your Future Today
                    </span>
                  </h3>
                  <p className="mt-4 text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Join thousands who've already taken the leap. Expert guidance, proven results.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:justify-end gap-4">
                  <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300">
                    <Link href="#contact">
                      <span className="flex items-center gap-2">
                        Start Your Journey
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


