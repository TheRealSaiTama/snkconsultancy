"use client";
import * as React from 'react';
import { Plane } from 'lucide-react';

type SVGProps = React.SVGProps<SVGSVGElement>;

const FlightPath = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    {...props}
  >
    <defs>
      <path id="path-europe" d="M430 450 C 350 350, 200 300, 150 150" />
      <path id="path-me" d="M430 450 C 550 380, 700 300, 750 250" />
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Paths */}
    <use href="#path-europe" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5, 10" />
    <use href="#path-me" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5, 10" />

    {/* Animated Glowing Paths */}
    <use href="#path-europe" stroke="#00f6ff" strokeWidth="2" fill="none" className="animate-draw" filter="url(#glow)" />
    <use href="#path-me" stroke="#ffc400" strokeWidth="2" fill="none" className="animate-draw" filter="url(#glow)" />

    {/* Locations */}
    <circle cx="430" cy="450" r="8" fill="#22c55e" />
    <text x="440" y="470" fill="white" fontSize="14" fontWeight="bold">India</text>
    
    <circle cx="150" cy="150" r="5" fill="#00f6ff" />
    <text x="160" y="140" fill="white" fontSize="12">Europe</text>
    
    <circle cx="750" cy="250" r="5" fill="#ffc400" />
    <text x="700" y="240" fill="white" fontSize="12">Middle East</text>

    {/* Animated Planes */}
    <g>
        <Plane color="#00f6ff" />
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path-europe" />
        </animateMotion>
    </g>
    <g>
        <Plane color="#ffc400" />
        <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path-me" />
        </animateMotion>
    </g>
  </svg>
);

const SNKLogo = (props: SVGProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 40"
      width="160"
      height="40"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M 10 30 L 10 10 L 30 10 L 10 30 Z" fill="url(#logoGradient)" />
      <path d="M 30 10 L 30 30 L 10 30 L 30 10 Z" fill="url(#logoGradient)" opacity="0.6" />
      <text x="40" y="28" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="hsl(var(--primary))">
        SNK Overseas
      </text>
    </svg>
);


export const SvgIcon = {
  FlightPath,
  SNKLogo,
};
