"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SvgIcon } from '../icons';

export default function HeroSection() {
  const heroBg = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen h-[110vh] w-full overflow-hidden bg-black">
      {/* Layered backgrounds for depth */}
      <div className="absolute inset-0">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            data-ai-hint={heroBg.imageHint}
            fill
            className="object-cover scale-110"
            priority
            style={{ 
              transform: `translateY(${scrollY * 0.5}px) scale(${1.1 - scrollY * 0.0001})`,
              filter: 'brightness(0.3) contrast(1.2)'
            }}
          />
        )}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] animate-pulse"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }} />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[100px] animate-pulse animation-delay-2000"
          style={{ transform: `translate(${-mousePos.x * 20}px, ${-mousePos.y * 20}px)` }} />
        
        {/* Flight paths with glow */}
        <div className="absolute inset-0 top-[-5%]" style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}>
          <SvgIcon.FlightPath className="w-full h-full opacity-30" />
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4 max-w-7xl mx-auto pb-20">
        {/* Premium trust badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl animate-fade-in mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-white/90">Trusted by Fortune 500 Companies</span>
        </div>
        
        {/* Main headline with gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight animate-fade-in">
          <span className="block bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Global Talent
          </span>
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
            Infinite Possibilities
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="mt-6 max-w-3xl text-xl md:text-2xl text-white/80 font-light leading-relaxed animate-fade-up animation-delay-300">
          Connecting India's finest professionals with premium opportunities across the Middle East and Europe
        </p>
        
        {/* CTA Buttons with glassmorphism */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-500">
          <Button asChild size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white border-0 px-8 py-6 text-lg font-semibold backdrop-blur-xl">
            <Link href="#services">
              <span className="relative z-10 flex items-center gap-2">
                Hire World-Class Talent
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="group border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-xl px-8 py-6 text-lg font-semibold">
            <Link href="#success">
              <span className="flex items-center gap-2">
                Launch Your Global Career
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </div>
        
        {/* Stats with glass cards */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 animate-fade-up animation-delay-700">
          {[
            { value: '10+', label: 'Years Excellence', color: 'from-emerald-400 to-emerald-600' },
            { value: '5K+', label: 'Success Stories', color: 'from-blue-400 to-blue-600' },
            { value: '20+', label: 'Countries', color: 'from-amber-400 to-amber-600' }
          ].map((stat, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${stat.color}" />
              <div className="relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 hover:border-white/20 transition-all duration-300">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/60 uppercase tracking-widest font-medium">Scroll to explore</span>
        <ChevronDown className="h-6 w-6 text-white/60 animate-bounce" />
      </div>
    </section>
  );
}
