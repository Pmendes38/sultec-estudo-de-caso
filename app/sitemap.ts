import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { servicos } from '@/app/servicos/_data/servicos'
import { cases } from '@/app/projetos/_data/cases'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/servicos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/certificacao`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/projetos`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${SITE_URL}/materiais/checklist-homologacao`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = servicos.map((s) => ({
    url: `${SITE_URL}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const caseRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${SITE_URL}/projetos/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes]
}
