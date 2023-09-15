import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jaredmakes.com',
      lastModified: new Date(),
    },
    {
      url: 'https://jaredmakes.com/projects',
      lastModified: new Date(),
    }
  ]
}
