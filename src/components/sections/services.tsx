"use client";

import { Wrench, UtensilsCrossed, Factory, ShoppingCart, ShieldCheck, Ship, Plane, Search, FileText, School, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { 
    name: 'Construction', 
    icon: Wrench, 
    desc: 'Skilled laborers for Middle East projects.',
    gradient: 'from-amber-500 to-orange-600'
  },
  { 
    name: 'Hospitality', 
    icon: UtensilsCrossed, 
    desc: 'Staff for hotels, restaurants, and catering.',
    gradient: 'from-rose-500 to-pink-600'
  },
  { 
    name: 'Oil & Gas', 
    icon: Factory, 
    desc: 'Technical experts for offshore and onshore roles.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  { 
    name: 'Manufacturing', 
    icon: Factory, 
    desc: 'Production line workers and supervisors.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  { 
    name: 'Retail', 
    icon: ShoppingCart, 
    desc: 'Sales associates and managers for global brands.',
    gradient: 'from-purple-500 to-indigo-600'
  },
  { 
    name: 'Security', 
    icon: ShieldCheck, 
    desc: 'Trained security personnel for various sectors.',
    gradient: 'from-red-500 to-rose-600'
  },
  { 
    name: 'Logistics', 
    icon: Ship, 
    desc: 'Warehouse and supply chain professionals.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  { 
    name: 'Aviation', 
    icon: Plane, 
    desc: 'Ground staff and maintenance crews.',
    gradient: 'from-violet-500 to-purple-600'
  },
];

const processSteps = [
    { icon: Search, title: 'Consultation', description: 'Understanding your specific manpower needs.' },
    { icon: FileText, title: 'Screening', description: 'Vetting candidates for skill and reliability.' },
    { icon: School, title: 'Training', description: 'Upskilling talent to meet global standards.' },
    { icon: UserCheck, title: 'Placement', description: 'Seamlessly integrating employees into your team.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="content-section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/5 to-accent/5 rounded-tl-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Serve</span>
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connecting global talent with opportunities across continents
          </motion.p>
        </div>
        
        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-card rounded-2xl p-8 h-full border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.gradient} mb-6 text-white p-3`}>
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.desc}</p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Process Section */}
        <div className="mt-32">
            <div className="text-center mb-20">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Seamless</span> Process
              </motion.h3>
              <motion.p 
                className="max-w-2xl mx-auto text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                From requirement to deployment in four simple steps
              </motion.p>
            </div>
            
            {/* Process Timeline */}
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-accent/40 to-primary/20 hidden lg:block -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      className="relative flex flex-col lg:flex-row items-center"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {/* Step Number */}
                      <div className="absolute left-1/2 top-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-2xl shadow-lg -translate-x-1/2 -translate-y-1/2 z-10">
                        {index + 1}
                      </div>
                      
                      {/* Content */}
                      <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:order-last lg:text-left'} text-center`}>
                        <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-4">
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <h4 className="text-2xl font-bold text-primary mb-3">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Empty column for spacing */}
                      <div className="lg:w-2/12"></div>
                      
                      {/* Visual Element */}
                      <div className="lg:w-5/12 mt-8 lg:mt-0">
                        <div className="h-32 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
}
