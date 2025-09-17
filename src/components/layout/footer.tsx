"use client";

import { Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const privacyPolicyContent = {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: September 15, 2025",
    introduction: "At SNK Global, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
    sections: [
      {
        title: "Information We Collect",
        content: [
          "Personal Identification Information: Name, email address, phone number, passport details, employment history, and educational qualifications.",
          "Financial Information: Bank account details, salary information, and payment records for transaction processing.",
          "Technical Data: IP address, browser type, device information, and browsing patterns for website optimization.",
          "Professional Details: Work experience, skills, certifications, and job preferences for placement services."
        ]
      },
      {
        title: "How We Use Your Information",
        content: [
          "Recruitment Services: Matching your profile with suitable job opportunities in the Middle East and Europe.",
          "Communication: Sending updates about job openings, interviews, and placement opportunities.",
          "Legal Compliance: Meeting regulatory requirements for international employment and immigration processes.",
          "Service Improvement: Enhancing our platform and services based on user feedback and behavior."
        ]
      },
      {
        title: "Data Protection Measures",
        content: [
          "Encryption: All data transmission is secured with advanced SSL encryption technology.",
          "Access Control: Strict authorization protocols limit data access to authorized personnel only.",
          "Regular Audits: Periodic security assessments ensure compliance with international data protection standards.",
          "Data Retention: Information is retained only as long as necessary for service provision or legal requirements."
        ]
      },
      {
        title: "International Data Transfers",
        content: [
          "Cross-Border Processing: Your data may be transferred to and processed in countries where our partners operate, ensuring equivalent protection levels.",
          "GDPR Compliance: For EU citizens, we maintain full compliance with General Data Protection Regulation standards.",
          "Local Regulations: All transfers adhere to applicable data protection laws in originating and destination countries."
        ]
      },
      {
        title: "Your Rights",
        content: [
          "Access: Right to obtain confirmation and copies of your personal data we hold.",
          "Correction: Right to rectify inaccurate or incomplete personal information.",
          "Deletion: Right to request deletion of your data when it's no longer necessary for our services.",
          "Restriction: Right to limit processing of your data under certain conditions.",
          "Portability: Right to receive your data in a structured, machine-readable format."
        ]
      },
      {
        title: "Third-Party Services",
        content: [
          "Partner Organizations: We collaborate with verified employers and government agencies for placement services.",
          "Analytics Providers: We use industry-standard analytics tools to improve our platform experience.",
          "Payment Processors: Secure payment handling through certified financial institutions.",
          "All third parties are contractually obligated to maintain the confidentiality and security of your data."
        ]
      }
    ],
    contact: {
      title: "Contact Us",
      description: "For any questions or concerns regarding this Privacy Policy, please contact our Data Protection Officer:",
      email: "privacy@snkglobaloverseas.com",
      phone: "+91 8700348338"
    }
  };

  return (
    <>
      <footer className="bg-background border-t relative mt-auto w-full overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
          background: `radial-gradient(circle at center, hsl(var(--primary)), transparent 70%)`,
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}></div>
        
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-6 text-left text-sm text-muted-foreground md:px-6 md:h-20 relative z-10">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} SNK Global. All Rights Reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+91 8700348338</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9911103791</span>
              </div>
            </div>
            <button 
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-left hover:text-primary transition-colors w-fit"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsPrivacyModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-gradient-to-br from-card to-background border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Header */}
              <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-bold text-primary">{privacyPolicyContent.title}</h2>
                      <p className="mt-2 text-muted-foreground">{privacyPolicyContent.lastUpdated}</p>
                    </div>
                    <button
                      onClick={() => setIsPrivacyModalOpen(false)}
                      className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                    {privacyPolicyContent.introduction}
                  </p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-8">
                <div className="space-y-12">
                  {privacyPolicyContent.sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary group-hover:bg-accent transition-colors"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}

                  {/* Contact Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-primary/5 rounded-xl p-6 border border-primary/10"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-3">{privacyPolicyContent.contact.title}</h3>
                    <p className="text-muted-foreground mb-4">{privacyPolicyContent.contact.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href={`mailto:${privacyPolicyContent.contact.email}`} className="text-primary hover:underline">
                          {privacyPolicyContent.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href={`tel:${privacyPolicyContent.contact.phone}`} className="text-primary hover:underline">
                          {privacyPolicyContent.contact.phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Footer */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 text-center border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  SNK Global is committed to protecting your privacy and complying with international data protection laws.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
