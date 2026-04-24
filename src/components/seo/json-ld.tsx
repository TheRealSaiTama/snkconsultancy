import { businessInfo } from '@/lib/business-info';

export default function JsonLd() {
  const graph = [
    {
      '@type': ['LocalBusiness', 'EmploymentAgency', 'Organization'],
      '@id': `${businessInfo.url}/#organization`,
      name: businessInfo.name,
      legalName: businessInfo.legalName,
      url: businessInfo.url,
      logo: businessInfo.logo,
      image: businessInfo.logo,
      description: businessInfo.description,
      email: businessInfo.email,
      telephone: businessInfo.primaryPhone,
      address: {
        '@type': 'PostalAddress',
        ...businessInfo.address,
      },
      areaServed: ['India', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Middle East', 'Europe'],
      serviceType: businessInfo.services,
      sameAs: businessInfo.sameAs,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: businessInfo.primaryPhone,
          contactType: 'customer service',
          areaServed: ['IN', 'AE', 'SA', 'QA'],
          availableLanguage: ['English', 'Hindi'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${businessInfo.url}/#website`,
      url: businessInfo.url,
      name: businessInfo.name,
      publisher: { '@id': `${businessInfo.url}/#organization` },
      inLanguage: 'en-IN',
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      }}
    />
  );
}
