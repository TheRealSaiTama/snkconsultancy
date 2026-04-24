import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { businessInfo } from '@/lib/business-info';
import { getSeoPage, seoPages } from '@/lib/seo-pages';
import { Button } from '@/components/ui/button';

type SeoLandingPageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SeoLandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  const path = `/${page.slug.join('/')}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: path,
      type: 'website',
      images: [
        {
          url: '/LOGO2.png',
          width: 800,
          height: 800,
          alt: businessInfo.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/LOGO2.png'],
    },
  };
}

export default async function SeoLandingPage({ params }: SeoLandingPageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.description,
    provider: { '@id': `${businessInfo.url}/#organization` },
    areaServed: ['India', 'Middle East', 'Europe'],
    serviceType: page.keywords,
    url: `${businessInfo.url}/${page.slug.join('/')}`,
  };

  return (
    <article className="min-h-screen bg-background pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="content-section pt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              {businessInfo.name} SEO service page
            </div>
            <h1 className="text-4xl font-black tracking-tight text-primary md:text-6xl">{page.h1}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">{page.intro}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/#contact">
                  Request Recruitment Support <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${businessInfo.primaryPhone}`}>{businessInfo.displayPrimaryPhone}</a>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {page.sections.map((section) => (
              <section key={section.title} className="rounded-2xl border bg-card/80 p-6 shadow-sm">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mx-auto mt-16 max-w-5xl rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
            <h2 className="text-3xl font-bold">Contact {businessInfo.name}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <p>
                  {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion}{' '}
                  {businessInfo.address.postalCode}
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0" />
                <p>
                  <a className="underline-offset-4 hover:underline" href={`tel:${businessInfo.primaryPhone}`}>
                    {businessInfo.displayPrimaryPhone}
                  </a>{' '}
                  /{' '}
                  <a className="underline-offset-4 hover:underline" href={`tel:${businessInfo.secondaryPhone}`}>
                    {businessInfo.displaySecondaryPhone}
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}
