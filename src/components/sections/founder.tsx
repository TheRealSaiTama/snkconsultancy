"use client";

import Image from 'next/image';

const leaders = [
  {
    name: "Attri Family",
    role: "Founder",
    image: "/attri-family.jpeg",
  },
  {
    name: "Sohan Attri",
    role: "Managing Director",
    image: "/sohan-attri.jpeg",
  },
  {
    name: "Lokesh Rayal",
    role: "Executive Director",
    image: "/image.png",
  },
];

export default function FounderSection() {
  return (
    <section id="founder" className="relative py-12 md:py-24 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-12 text-center tracking-tight">
          Meet Our Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/60"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 mb-6">
                <Image
                  src={leader.image}
                  alt={`${leader.name} - ${leader.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-light text-slate-900">{leader.name}</h3>
              <p className="text-slate-600 font-medium mt-1">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
