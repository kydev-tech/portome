import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kydev.my.id'
  const currentDate = new Date('2026-01-12')

  return [
    // Homepage / Hero Section
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          id: `${baseUrl}`,
          en: `${baseUrl}/en`,
          ja: `${baseUrl}/ja`,
        },
      },
    },

  ]
}