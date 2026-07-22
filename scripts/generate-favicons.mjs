/**
 * Generate favicon set from public/sultec/logo/logo.png
 *
 * Google exige ícone quadrado múltiplo de 48px (mín. 48×48).
 * favicon.ico precisa ser ICO real (não PNG renomeado).
 */

import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const src = path.join(root, 'public', 'sultec', 'logo', 'logo.png')
const publicDir = path.join(root, 'public')

const BG = { r: 7, g: 8, b: 8, alpha: 1 } // #070808

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 32, name: 'icon.png' },
  { size: 180, name: 'apple-icon.png', padded: true },
  { size: 180, name: 'apple-touch-icon.png', padded: true },
  { size: 192, name: 'android-chrome-192x192.png', padded: true },
  { size: 512, name: 'android-chrome-512x512.png', padded: true },
]

async function generatePng({ size, padded }) {
  const pad = padded ? Math.round(size * 0.12) : 0
  const inner = size - pad * 2

  const logoBuffer = await sharp(src)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer()

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: padded ? BG : { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logoBuffer, top: pad, left: pad }])
    .png()
    .toBuffer()
}

async function writeWebmanifest(dir) {
  const manifest = {
    name: 'Sultec Tecnologia',
    short_name: 'Sultec',
    description:
      'Projetos B2B de cabeamento estruturado, fibra óptica, Data Centers e certificação Fluke para indústrias e empresas em Chapecó e região Sul.',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#F35901',
    background_color: '#070808',
    display: 'standalone',
    start_url: '/',
  }
  await fs.writeFile(path.join(dir, 'site.webmanifest'), JSON.stringify(manifest, null, 2))
}

async function main() {
  await fs.mkdir(publicDir, { recursive: true })

  const icoSources = []

  for (const item of sizes) {
    const buf = await generatePng(item)
    await fs.writeFile(path.join(publicDir, item.name), buf)
    console.log(`  ✓ ${item.name} (${item.size}×${item.size})`)
    if ([16, 32, 48].includes(item.size) && item.name.startsWith('favicon-')) {
      icoSources.push({ size: item.size, buf })
    }
  }

  icoSources.sort((a, b) => a.size - b.size)
  const ico = await pngToIco(icoSources.map((s) => s.buf))
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), ico)
  console.log('  ✓ favicon.ico (ICO real 16/32/48)')

  // Next.js App Router: app/icon.png (usado automaticamente)
  const appIcon = await generatePng({ size: 48, padded: true })
  await fs.writeFile(path.join(root, 'app', 'icon.png'), appIcon)
  console.log('  ✓ app/icon.png (48×48)')

  await writeWebmanifest(publicDir)
  console.log('  ✓ site.webmanifest')
  console.log('\nDone.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
