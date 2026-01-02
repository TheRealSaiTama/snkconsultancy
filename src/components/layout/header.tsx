"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, Info, Briefcase, Award, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home', icon: <Home /> },
  { href: '#about', label: 'About', icon: <Info /> },
  { href: '#services', label: 'Services', icon: <Briefcase /> },
  { href: '#founder', label: 'Founder', icon: <User /> },
  { href: '#success', label: 'Success', icon: <Award /> },
  { href: '#contact', label: 'Contact', icon: <Mail /> },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm h-24' : 'bg-transparent h-28'
      )}
    >
      <div className="flex h-full items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 ml-4 md:ml-6">
          <div className="rounded-full border-2 border-primary p-1 bg-white">
            <Image src="/LOGO2.png" alt="SNK Global" width={100} height={100} className="h-20 w-auto object-contain" />
          </div>
        </Link>
        <div className="flex items-center pr-4 md:pr-6">
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className={cn(
                  'group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 overflow-hidden',
                  isScrolled
                    ? 'text-foreground/90 hover:text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/10'
                    : 'text-white/95 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]'
                )}
              >
                <Link href={link.href} className="flex items-center gap-2">
                  <span className="pointer-events-none absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:-translate-x-full group-hover:before:translate-x-full before:transition-transform before:duration-700 before:rounded-full" />
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="#home" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="rounded-full border-2 border-primary p-1 bg-white">
                          <Image src="/LOGO2.png" alt="SNK Global" width={120} height={120} className="h-12 w-auto object-contain" />
                        </div>
                      </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close navigation menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col items-start space-y-2 p-4">
                    {navLinks.map((link) => (
                       <Button key={link.href} variant="ghost" asChild className="w-full justify-start text-lg rounded-xl border border-border bg-background/60 hover:bg-foreground/5">
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2"
                          >
                            {link.icon}
                            <span>{link.label}</span>
                          </Link>
                      </Button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
