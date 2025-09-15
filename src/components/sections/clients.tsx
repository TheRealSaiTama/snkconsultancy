"use client";

import { motion } from 'framer-motion';

const clients = [
  'Transguard', 'Emrill', 'Ejadah', 'Spark Security', 'Vone', 
  'Sobha', 'Noon', 'Talabat', 'Binghatti', 'ADNOC', 
  'EKFC', 'iFM', 'Dulsco', 'Almaha Catering', 'Azizi'
];

export default function ClientsSection() {
  return (
    <section className="content-section py-16 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connecting talent with opportunity across continents
          </p>
        </motion.div>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="mx-8 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  color: "hsl(var(--primary))",
                  textShadow: "0 0 8px hsl(var(--primary) / 0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-2xl md:text-3xl font-bold text-muted-foreground/80 hover:text-primary transition-all duration-300">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee2 whitespace-nowrap mt-8">
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`dup-${index}`}
                className="mx-8 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  color: "hsl(var(--primary))",
                  textShadow: "0 0 8px hsl(var(--primary) / 0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-2xl md:text-3xl font-bold text-muted-foreground/80 hover:text-primary transition-all duration-300">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}