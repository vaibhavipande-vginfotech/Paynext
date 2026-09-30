import LegalDocument from '@/components/site/legal-document'
import legal from '@/lib/legal-content.json'
import { contact } from '@/lib/site-content'
import { pageMeta } from '@/lib/seo'

// Content: reused from the VGIL website (disclaimer) as instructed by the client, company name changed to PayNext.
// Pending legal review.
export const metadata = pageMeta("/disclaimer", {
  title: 'Disclaimer | PayNext',
  description: legal['disclaimer'].intro[0]?.p || legal['disclaimer'].sections[0]?.blocks[0]?.p,
})

export default function DisclaimerPage() {
  return (
    <LegalDocument eyebrow="PayNext" doc={legal['disclaimer']}>
      <p className="leading-relaxed text-muted-foreground">
        {contact.enterprise}: Email:{' '}
        <a href={`mailto:${contact.email}`} className="font-medium text-brand hover:underline">
          {contact.email}
        </a>
      </p>
    </LegalDocument>
  )
}
