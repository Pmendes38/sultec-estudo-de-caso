'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'
import { Lightbox } from '../_parts/Lightbox'

export function CaseGallery({
  images,
  title,
  category,
}: {
  images: string[]
  title: string
  category?: string
}) {
  const [index, setIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  return (
    <>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {images.map((img, i) => (
          <motion.button
            key={img}
            variants={fadeUp}
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-[10px] border-2 border-[#1c1d1e] hover:border-[#F35901]/50 transition-colors"
          >
            <Image
              src={img}
              alt={`${title}: foto ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {index !== null && (
          <Lightbox
            images={images}
            title={title}
            category={category}
            initialIndex={index}
            onClose={() => setIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
