import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourwebsite.com'
  const currentDate = new Date()

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
    
    // About Section
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Experience Section
    {
      url: `${baseUrl}/#experience`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Skills Section
    {
      url: `${baseUrl}/#skills`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Projects Section
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Contact Section
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    
    // Individual Project Pages (jika ada)
    // Uncomment jika Anda membuat halaman terpisah untuk setiap project
    /*
    {
      url: `${baseUrl}/projects/dawu-company-profile`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    */
  ]
}