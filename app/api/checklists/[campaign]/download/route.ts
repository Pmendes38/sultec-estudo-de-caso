import { NextRequest, NextResponse } from 'next/server'
import { CAMPAIGNS, getCampaign } from '@/lib/leads/checklist-campaigns'
import { isValidAccessToken, readPrivateMaterial } from '@/app/api/leads/checklists/route'

export const runtime = 'nodejs'

export async function GET(
  req: NextRequest,
  { params }: { params: { campaign: string } },
) {
  const campaign = getCampaign(params.campaign)
  if (!campaign) return NextResponse.json({ ok: false, message: 'Campanha inválida.' }, { status: 404 })

  const token = req.cookies.get(`sultec_checklist_access_${campaign}`)?.value
  if (!isValidAccessToken(campaign, token)) {
    return NextResponse.json({ ok: false, message: 'Preencha o formulário para liberar este material.' }, { status: 403 })
  }

  const buffer = await readPrivateMaterial(campaign)
  if (!buffer) return NextResponse.json({ ok: false, message: 'Material indisponível.' }, { status: 503 })

  const body = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${CAMPAIGNS[campaign].downloadFilename}"`,
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
