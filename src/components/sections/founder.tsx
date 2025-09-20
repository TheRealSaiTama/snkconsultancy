"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const achievements = [
  { number: "10+", label: "Years Experience" },
  { number: "5,000+", label: "Lives Transformed" },
  { number: "20", label: "Countries Served" },
  { number: "500+", label: "Corporate Partners" }
];

const credentials = [
  "International Business Strategy",
  "Global Talent Acquisition", 
  "Cross-Cultural Leadership",
  "Regulatory Compliance",
  "Strategic Partnerships",
  "Operational Excellence"
];

export default function FounderSection() {
  return (
    <section id="founder" className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 scroll-mt-28">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-slate-50/30"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Executive Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            Executive Leadership
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4 tracking-tight">
            Meet Our Founder
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Driving excellence in international talent solutions
          </p>
        </motion.div>

        {/* Executive Profile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
            {/* Professional Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Portrait Container */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-200/60">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src="/sohanattri2.jpeg"
                      alt="Attri Family- Founder, SNK Global"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  
                  {/* Executive Badge */}
                  <div className="absolute top-10 right-10 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                    Founder & CEO
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Executive Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              {/* Name & Title */}
              <div>
                <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-3 tracking-tight">
                  Sohan Attri
                </h3>
                <p className="text-xl text-slate-600 font-medium">
                  Founder
                </p>
              </div>

              {/* Executive Biography */}
              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  With over a decade of distinguished experience in international recruitment and global workforce solutions, Attri Family has established SNK Global as a premier consultancy connecting exceptional talent with world-class opportunities.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  His strategic vision and commitment to excellence have transformed thousands of careers while building lasting partnerships with leading organizations across 20 countries. Under his leadership, SNK Global has become synonymous with integrity, quality, and results in the international placement industry.
                </p>
              </div>

              {/* Core Competencies */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Core Competencies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {credentials.map((credential, index) => (
                    <div
                      key={credential}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60 text-center"
              >
                <div className="text-3xl md:text-4xl font-light text-slate-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Executive Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-light text-white/95 leading-relaxed mb-6">
                "Excellence is not just about meeting expectations—it's about creating opportunities that transform lives and build bridges between talent and success across continents."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-white/30"></div>
                <cite className="text-white/80 font-medium not-italic">Sohan Attri</cite>
                <div className="w-12 h-px bg-white/30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


