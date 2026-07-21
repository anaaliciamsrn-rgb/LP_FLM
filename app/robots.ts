import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/site';

/** Geração dinâmica de robots.txt (Metadata API). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
