'use client'

import { useEffect } from 'react'
import { EBOOK_CONTENT_CATEGORY, EBOOK_CONTENT_NAME } from '@/lib/leads/ebook-homologacao'
import { trackViewContent } from '@/lib/meta-pixel'

export function CaptureTracking() {
  useEffect(() => {
    trackViewContent({
      content_name: EBOOK_CONTENT_NAME,
      content_category: EBOOK_CONTENT_CATEGORY,
    })
  }, [])

  return null
}
