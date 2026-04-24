import { businessInfo } from './business-info';

export type SeoPage = {
  slug: string[];
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
  keywords: string[];
};

const buildPage = (page: SeoPage) => page;

export const seoPages: SeoPage[] = [
  buildPage({
    slug: ['services', 'manpower-recruitment'],
    title: 'Overseas Manpower Recruitment Agency in India | SNK Global India',
    description:
      'SNK Global India helps employers hire skilled Indian manpower for overseas roles across construction, hospitality, oil and gas, logistics, and technical trades.',
    h1: 'Overseas Manpower Recruitment Agency in India',
    intro:
      'SNK Global India connects employers with screened Indian candidates for international workforce requirements. From New Delhi, our team supports hiring coordination, candidate screening, documentation guidance, and placement assistance for overseas roles.',
    sections: [
      {
        title: 'Reliable recruitment support for overseas employers',
        body: 'We help companies source workers for construction, hospitality, oil and gas, logistics, manufacturing, aviation, security, and general staffing needs. Our process focuses on role fit, communication, and practical deployment readiness.',
      },
      {
        title: 'Candidate-first placement guidance',
        body: 'For job seekers, SNK Global India provides guidance across opportunity matching, document preparation, interviews, and placement coordination so candidates can pursue overseas work with clarity.',
      },
    ],
    keywords: ['overseas manpower recruitment agency in India', 'international recruitment agency India', 'manpower consultancy New Delhi'],
  }),
  buildPage({
    slug: ['services', 'overseas-placement'],
    title: 'Overseas Job Placement Consultancy in New Delhi | SNK Global India',
    description:
      'Overseas job placement support for Indian candidates seeking roles in the Middle East and Europe through SNK Global India in New Delhi.',
    h1: 'Overseas Job Placement Consultancy in New Delhi',
    intro:
      'SNK Global India supports Indian professionals exploring overseas employment opportunities in industries where skilled, reliable manpower is in demand.',
    sections: [
      {
        title: 'Placement coordination across high-demand sectors',
        body: 'We work across sectors including construction, hospitality, oil and gas, manufacturing, logistics, retail, security, and aviation. Each opportunity is approached with attention to job fit, employer requirements, and candidate readiness.',
      },
      {
        title: 'Practical documentation guidance',
        body: 'Our team assists candidates with the placement process and document coordination needed for overseas recruitment workflows, while keeping communication clear and transparent.',
      },
    ],
    keywords: ['overseas job placement consultancy', 'New Delhi recruitment consultancy', 'international job placement India'],
  }),
  buildPage({
    slug: ['industries', 'construction-manpower'],
    title: 'Construction Manpower Recruitment from India | SNK Global India',
    description:
      'Hire construction manpower from India for overseas projects with SNK Global India, a New Delhi-based recruitment and staffing consultancy.',
    h1: 'Construction Manpower Recruitment from India',
    intro:
      'SNK Global India helps overseas employers connect with Indian construction manpower for project staffing requirements across the Middle East and Europe.',
    sections: [
      {
        title: 'Skilled workforce for project execution',
        body: 'Construction projects require dependable teams across skilled, semi-skilled, and support roles. We assist with sourcing and screening candidates based on role expectations and employer requirements.',
      },
      {
        title: 'Recruitment coordination from New Delhi',
        body: `Our recruitment support is coordinated from ${businessInfo.address.addressLocality}, helping employers and candidates move through hiring steps with a clear process.`,
      },
    ],
    keywords: ['construction manpower recruitment India', 'construction staffing agency India', 'hire Indian construction workers'],
  }),
  buildPage({
    slug: ['industries', 'hospitality-recruitment'],
    title: 'Hospitality Recruitment Agency in India | SNK Global India',
    description:
      'Hospitality recruitment from India for hotels, restaurants, catering, and facility operations through SNK Global India.',
    h1: 'Hospitality Recruitment Agency in India',
    intro:
      'SNK Global India supports hospitality employers seeking Indian candidates for hotel, restaurant, catering, housekeeping, and guest service roles overseas.',
    sections: [
      {
        title: 'Hospitality talent for overseas employers',
        body: 'We support hiring for service-oriented roles where professionalism, communication, and reliability are essential to guest experience and daily operations.',
      },
      {
        title: 'Screening and placement assistance',
        body: 'Our process helps align candidate expectations with employer requirements, reducing hiring friction for international hospitality placements.',
      },
    ],
    keywords: ['hospitality recruitment agency India', 'hotel staff recruitment India', 'catering manpower India'],
  }),
  buildPage({
    slug: ['industries', 'oil-gas-manpower'],
    title: 'Oil and Gas Manpower Recruitment from India | SNK Global India',
    description:
      'Oil and gas manpower recruitment support from India for overseas technical, offshore, onshore, and operations roles.',
    h1: 'Oil and Gas Manpower Recruitment from India',
    intro:
      'SNK Global India helps connect Indian technical and operations candidates with overseas manpower requirements in oil and gas sectors.',
    sections: [
      {
        title: 'Technical recruitment support',
        body: 'Oil and gas employers need candidates who understand safety, discipline, and operational requirements. SNK Global India supports recruitment coordination for relevant manpower needs.',
      },
      {
        title: 'International staffing coordination',
        body: 'We assist employers and candidates through role matching, documentation guidance, and placement coordination for overseas opportunities.',
      },
    ],
    keywords: ['oil and gas manpower recruitment India', 'oil gas staffing agency India', 'technical manpower recruitment India'],
  }),
  buildPage({
    slug: ['locations', 'new-delhi'],
    title: 'Manpower Recruitment Agency in New Delhi | SNK Global India',
    description:
      'SNK Global India is a manpower recruitment agency in New Delhi supporting overseas staffing and job placement for the Middle East and Europe.',
    h1: 'Manpower Recruitment Agency in New Delhi',
    intro:
      'Located in Badarpur, New Delhi, SNK Global India provides overseas manpower recruitment and placement support for employers and candidates.',
    sections: [
      {
        title: 'Local office, international recruitment focus',
        body: 'Our New Delhi location supports candidates and employers with recruitment communication, placement coordination, and documentation guidance for international roles.',
      },
      {
        title: 'Serving India-to-overseas hiring needs',
        body: 'We focus on connecting Indian manpower with opportunities across the Middle East and Europe in sectors with consistent workforce demand.',
      },
    ],
    keywords: ['manpower recruitment agency New Delhi', 'overseas placement New Delhi', 'recruitment consultancy Badarpur'],
  }),
  buildPage({
    slug: ['countries', 'uae'],
    title: 'UAE Manpower Recruitment from India | SNK Global India',
    description:
      'SNK Global India supports manpower recruitment from India for UAE employers across construction, hospitality, oil and gas, logistics, and services.',
    h1: 'UAE Manpower Recruitment from India',
    intro:
      'SNK Global India helps connect Indian candidates with UAE manpower requirements through recruitment coordination and placement support.',
    sections: [
      {
        title: 'Recruitment support for UAE employers',
        body: 'We assist with staffing needs across construction, hospitality, facility management, logistics, retail, security, and technical roles for UAE-based employers.',
      },
      {
        title: 'Guidance for candidates pursuing UAE roles',
        body: 'Candidates receive practical support around opportunity matching, employer communication, and document readiness during the placement process.',
      },
    ],
    keywords: ['UAE manpower recruitment from India', 'Dubai recruitment agency India', 'hire Indian workers UAE'],
  }),
  buildPage({
    slug: ['countries', 'saudi-arabia'],
    title: 'Saudi Arabia Manpower Recruitment from India | SNK Global India',
    description:
      'Recruitment and manpower placement support from India for Saudi Arabia employers through SNK Global India in New Delhi.',
    h1: 'Saudi Arabia Manpower Recruitment from India',
    intro:
      'SNK Global India supports India-to-Saudi Arabia manpower recruitment for employers and candidates across high-demand sectors.',
    sections: [
      {
        title: 'Sector-focused manpower support',
        body: 'We support recruitment coordination for construction, hospitality, oil and gas, technical trades, logistics, and general workforce roles needed by Saudi employers.',
      },
      {
        title: 'Clear recruitment communication',
        body: 'Our process is built around clear requirements, candidate screening, documentation guidance, and placement coordination.',
      },
    ],
    keywords: ['Saudi Arabia manpower recruitment from India', 'Saudi recruitment agency India', 'hire Indian workers Saudi Arabia'],
  }),
  buildPage({
    slug: ['countries', 'qatar'],
    title: 'Qatar Manpower Recruitment from India | SNK Global India',
    description:
      'SNK Global India provides manpower recruitment and placement support from India for Qatar employers and overseas job seekers.',
    h1: 'Qatar Manpower Recruitment from India',
    intro:
      'SNK Global India supports recruitment coordination for Qatar manpower requirements across service, technical, construction, and operations roles.',
    sections: [
      {
        title: 'India-to-Qatar workforce placement support',
        body: 'We help employers and candidates align around job requirements, screening, documentation guidance, and placement coordination for Qatar opportunities.',
      },
      {
        title: 'Practical staffing solutions',
        body: 'Our recruitment support covers industries including construction, hospitality, logistics, security, and technical manpower needs.',
      },
    ],
    keywords: ['Qatar manpower recruitment from India', 'Qatar recruitment agency India', 'hire Indian workers Qatar'],
  }),
];

export const getSeoPage = (slug: string[]) => seoPages.find((page) => page.slug.join('/') === slug.join('/'));

export const seoPageLinks = seoPages.map((page) => ({
  href: `/${page.slug.join('/')}`,
  label: page.h1,
}));
