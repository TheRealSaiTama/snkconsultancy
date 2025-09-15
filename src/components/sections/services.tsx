import { Wrench, UtensilsCrossed, Factory, ShoppingCart, ShieldCheck, Ship, Plane, Search, FileText, School, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '../animated-section';

const industries = [
  { name: 'Construction', icon: <Wrench className="h-8 w-8 mb-4 text-primary" />, desc: 'Skilled laborers for Middle East projects.' },
  { name: 'Hospitality', icon: <UtensilsCrossed className="h-8 w-8 mb-4 text-primary" />, desc: 'Staff for hotels, restaurants, and catering.' },
  { name: 'Oil & Gas', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-primary"><path d="M14 3h2.5a2 2 0 0 1 2 1.83l1.5 9.35A2 2 0 0 1 18.22 16H5.78a2 2 0 0 1-1.79-2.82l1.5-9.35A2 2 0 0 1 7.5 3H10"></path><path d="M14 3v3a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V3"></path><path d="M12 21v-8"></path><path d="M12 21H8l-1-4"></path><path d="m12 21 4-1-1-3"></path></svg>, desc: 'Technical experts for offshore and onshore roles.' },
  { name: 'Manufacturing', icon: <Factory className="h-8 w-8 mb-4 text-primary" />, desc: 'Production line workers and supervisors.' },
  { name: 'Retail', icon: <ShoppingCart className="h-8 w-8 mb-4 text-primary" />, desc: 'Sales associates and managers for global brands.' },
  { name: 'Security', icon: <ShieldCheck className="h-8 w-8 mb-4 text-primary" />, desc: 'Trained security personnel for various sectors.' },
  { name: 'Logistics', icon: <Ship className="h-8 w-8 mb-4 text-primary" />, desc: 'Warehouse and supply chain professionals.' },
  { name: 'Aviation', icon: <Plane className="h-8 w-8 mb-4 text-primary" />, desc: 'Ground staff and maintenance crews.' },
];

const processSteps = [
    { icon: <Search/>, title: 'Consultation', description: 'Understanding your specific manpower needs.' },
    { icon: <FileText/>, title: 'Screening', description: 'Vetting candidates for skill and reliability.' },
    { icon: <School/>, title: 'Training', description: 'Upskilling talent to meet global standards.' },
    { icon: <UserCheck/>, title: 'Placement', description: 'Seamlessly integrating employees into your team.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Industries We Serve</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We specialize in sourcing top-tier talent across a wide range of sectors for opportunities abroad.
          </p>
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.name} delay={`delay-${index * 100}`}>
              <Card className="text-center hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 h-full">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-primary">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{industry.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-24">
            <AnimatedSection>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">Our Process</h3>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A streamlined journey from requirement to deployment, ensuring quality and efficiency.
                </p>
            </AnimatedSection>
            <div className="relative mt-16 max-w-4xl mx-auto">
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
                
                {processSteps.map((step, index) => (
                    <AnimatedSection key={step.title} delay={`delay-${index * 200}`} className="mb-12 md:mb-0">
                        <div className="flex md:items-center flex-col md:flex-row">
                            <div className={`flex-1 md:pr-8 text-center md:text-left ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:order-2'}`}>
                                <div className="inline-block bg-background p-4 rounded-full border-2 border-primary shadow-lg">
                                    <step.icon.type className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="mt-4 text-2xl font-bold text-primary">{step.title}</h4>
                                <p className="mt-2 text-muted-foreground">{step.description}</p>
                            </div>
                            <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl z-10 my-4 md:my-0">
                                {index + 1}
                            </div>
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:order-1'}`}></div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
