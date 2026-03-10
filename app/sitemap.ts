import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-10');

  return [
    {
      url: 'https://tinty.com/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://tinty.com/privacy/',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://tinty.com/terms/',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
