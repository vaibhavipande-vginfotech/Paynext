import LegalDocument from '@/components/site/legal-document'
import legal from '@/lib/legal-content.json'
import { contact } from '@/lib/site-content'
import { pageMeta } from '@/lib/seo'

// Content: reused from the VGIL website (terms_of_use) as instructed by the client, company name changed to PayNext.
// Pending legal review.
export const metadata = pageMeta("/terms", {
  title: 'Terms of Use | PayNext',
  description: legal['terms_of_use'].intro[0]?.p || legal['terms_of_use'].sections[0]?.blocks[0]?.p,
})

export default function TermsPage() {
  return (
    <LegalDocument eyebrow="PayNext" doc={legal['terms_of_use']}>
      <p className="leading-relaxed text-muted-foreground">
        {contact.enterprise}: Email:{' '}
        <a href={`mailto:${contact.email}`} className="font-medium text-brand hover:underline">
          {contact.email}
        </a>
      </p>
    </LegalDocument>
  )
}
