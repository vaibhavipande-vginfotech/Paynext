import LegalDocument from '@/components/site/legal-document'
import legal from '@/lib/legal-content.json'
import { contact } from '@/lib/site-content'
import { pageMeta } from '@/lib/seo'

// Content: reused from the VGIL website (privacy) as instructed by the client, company name changed to PayNext.
// Pending legal review.
export const metadata = pageMeta("/privacy", {
  title: 'Privacy Statement | PayNext',
  description: legal['privacy'].intro[0]?.p || legal['privacy'].sections[0]?.blocks[0]?.p,
})

export default function PrivacyPage() {
  return (
    <LegalDocument eyebrow="PayNext" doc={legal['privacy']}>
      <p className="leading-relaxed text-muted-foreground">
        {contact.enterprise}: Email:{' '}
        <a href={`mailto:${contact.email}`} className="font-medium text-brand hover:underline">
          {contact.email}
        </a>
      </p>
    </LegalDocument>
  )
}
