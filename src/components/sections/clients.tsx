"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

// Magical client logos mapping with enhanced visual properties
const clientLogos = [
  { name: 'Transguard', logo: '/clients/transguard.png', color: 'from-blue-400 to-cyan-400' },
  { name: 'Emrill', logo: '/clients/emrill.png', color: 'from-green-400 to-emerald-400' },
  { name: 'Ejadah', logo: '/clients/aa.png', color: 'from-purple-400 to-violet-400' },
  { name: 'Spark Security', logo: '/clients/aas.png', color: 'from-orange-400 to-red-400' },
  { name: 'Vone', logo: '/clients/ff.png', color: 'from-pink-400 to-rose-400' },
  { name: 'Sobha', logo: '/clients/x.png', color: 'from-amber-400 to-yellow-400' },
  { name: 'Noon', logo: '/clients/y.png', color: 'from-indigo-400 to-blue-400' },
  { name: 'Talabat', logo: '/clients/z.png', color: 'from-teal-400 to-cyan-400' },
  { name: 'Binghatti', logo: '/clients/image_2025-09-17_00-12-53.png', color: 'from-slate-400 to-gray-400' },
  { name: 'ADNOC', logo: '/clients/image_2025-09-17_00-14-26.png', color: 'from-emerald-400 to-green-400' },
  { name: 'EKFC', logo: '/clients/image_2025-09-17_00-14-43.png', color: 'from-red-400 to-pink-400' },
  { name: 'iFM', logo: '/clients/image_2025-09-17_00-20-21.png', color: 'from-blue-400 to-indigo-400' },
  { name: 'Dulsco', logo: '/clients/image_2025-09-17_00-21-14.png', color: 'from-violet-400 to-purple-400' },
  { name: 'Almaha Catering', logo: '/clients/image_2025-09-17_00-24-09.png', color: 'from-orange-400 to-amber-400' },
  { name: 'Azizi', logo: '/clients/image_2025-09-17_00-25-52.png', color: 'from-cyan-400 to-teal-400' }
];

export default function ClientsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white scroll-mt-28">
      {/* Elite Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Elite Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Elite Partnership Network
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight">
            Trusted by
            <span className="block font-extralight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connecting exceptional talent with premier opportunities across three continents
          </p>
          
          <motion.div 
            className="mx-auto mt-12 w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Premium Logo Showcase */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 md:gap-12 mb-24">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-700 hover:-translate-y-2">
                {/* Subtle Premium Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Logo Container */}
                <div className="relative h-16 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-24 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={client.logo}
                      alt={`${client.name} - Trusted Partner`}
                      fill
                      className="object-contain filter grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-500"
                      sizes="(max-width: 768px) 100px, 120px"
                    />
                  </div>
                </div>

                {/* Elegant Bottom Border */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-slate-400 to-blue-500 group-hover:w-3/4 transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elite Testimonial Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,rgba(255,255,255,0.02))] bg-[length:60px_60px] animate-pulse"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-amber-400 rounded-full"></div>
                ))}
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-white/95 leading-relaxed mb-8 max-w-4xl mx-auto">
              "SNK Overseas has consistently delivered exceptional talent that drives our business forward. Their understanding of our industry needs is unmatched."
            </blockquote>
            
            <div className="text-white/80 font-medium">
              Senior HR Director, Fortune 500 Company
            </div>
          </div>
        </motion.div>

        {/* Elegant Marquee */}
        <div className="mt-24 relative overflow-hidden">
          <div className="flex space-x-16 animate-marquee">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                <div className="relative w-20 h-12">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}