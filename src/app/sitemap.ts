import type { MetadataRoute } from 'next';
import { businessInfo } from '@/lib/business-info';
import { seoPages } from '@/lib/seo-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: businessInfo.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...seoPages.map((page) => ({
      url: `${businessInfo.url}/${page.slug.join('/')}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: page.slug[0] === 'services' ? 0.9 : 0.8,
    })),
  ];
}
