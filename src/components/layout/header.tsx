"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, Info, Briefcase, Award, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home', icon: <Home /> },
  { href: '#about', label: 'About', icon: <Info /> },
  { href: '#services', label: 'Services', icon: <Briefcase /> },
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
            <Image src="/logo.png" alt="SNK Overseas" width={1000} height={1000} className="h-22 w-20 object-contain rounded-full" />
          </div>
        </Link>
        <div className="flex items-center pr-4 md:pr-6">
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="#home" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="rounded-full border-2 border-primary p-1 bg-white">
                          <Image src="/logo.png" alt="SNK Overseas" width={120} height={120} className="h-12 w-12 object-contain rounded-full" />
                        </div>
                      </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close navigation menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col items-start space-y-2 p-4">
                    {navLinks.map((link) => (
                       <Button key={link.href} variant="ghost" asChild className="w-full justify-start text-lg">
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
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
