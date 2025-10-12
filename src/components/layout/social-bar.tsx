import Link from 'next/link';
import { Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/snk-global-india/',
  instagram: 'https://www.instagram.com/snk.global/',
  facebook: 'https://www.facebook.com/people/SNK-Global/61581280836236/',
  whatsapp: 'https://wa.me/919911103791?text=Hi%20there!%20I%27d%20love%20to%20learn%20more%20about%20SNK%20Global.',
};

export default function SocialBar() {
  return (
    <>
      {/* Desktop: vertical floating bar */}
      <TooltipProvider>
        <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 pointer-events-none">
          <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
            <Instagram className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href={SOCIAL_LINKS.facebook} label="Facebook">
            <Facebook className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </SocialIcon>
        </div>
      </TooltipProvider>

      {/* Mobile: bottom quick-access pill */}
      <div className="md:hidden fixed inset-x-0 bottom-4 z-40 flex justify-center">
        <div className="flex items-center gap-4 rounded-full border border-primary/20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-2 shadow-lg">
          <QuickIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </QuickIcon>
          <QuickIcon href={SOCIAL_LINKS.instagram} label="Instagram">
            <Instagram className="h-5 w-5" />
          </QuickIcon>
          <QuickIcon href={SOCIAL_LINKS.facebook} label="Facebook">
            <Facebook className="h-5 w-5" />
          </QuickIcon>
          <QuickIcon href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </QuickIcon>
        </div>
      </div>
    </>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-background/90 text-primary shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:bg-primary hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground visited:text-primary"
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="left" className="select-none">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

function QuickIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-background/80 text-primary transition-colors hover:bg-primary hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground visited:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      {children}
    </Link>
  );
}
