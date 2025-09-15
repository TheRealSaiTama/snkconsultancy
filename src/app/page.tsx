import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import SuccessStoriesSection from '@/components/sections/success-stories';
import ContactSection from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <ContactSection />
    </div>
  );
}
