import type { MetadataRoute } from 'next';
import { businessInfo } from '@/lib/business-info';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${businessInfo.url}/sitemap.xml`,
    host: businessInfo.url,
  };
}
