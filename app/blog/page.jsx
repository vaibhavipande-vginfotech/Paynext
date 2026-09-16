import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata = {
  title: 'Insights | PayNext',
  description:
    'Insights on payment switching, ISO 8583/20022 modernization, payment orchestration, and fintech infrastructure from the PayNext team.',
}

const categories = ['Switching', 'Orchestration', 'Compliance', 'Card Issuance', 'Industry']

const articles = [
  {
    category: 'Switching',
    title: 'Modernizing ISO 8583: A Pragmatic Migration Path to ISO 20022',
    excerpt:
      'Why message-format modernization matters for authorization rates and reconciliation — and how to phase it without disrupting live traffic.',
    readTime: '8 min read',
  },
  {
    category: 'Orchestration',
    title: 'Smart Routing 101: Lifting Authorization Rates with Dynamic Multi-Bank Routing',
    excerpt:
      'How rule-based routing on price and success rate improves conversion and reduces cost across acquirers.',
    readTime: '6 min read',
  },
  {
    category: 'Compliance',
    title: 'RBI Data Localisation & PCI-DSS: What It Means for Your Payment Stack',
    excerpt:
      'A practical look at storage requirements, control mapping, and audit readiness for institutions operating in India.',
    readTime: '7 min read',
  },
  {
    category: 'Card Issuance',
    title: 'Instant Issuance: Designing a Card Programme That Scales',
    excerpt:
      'From PIN management to tokenization and wallet provisioning — the building blocks of a modern issuing stack.',
    readTime: '9 min read',
  },
  {
    category: 'Industry',
    title: 'NCMC, NETC & Micro ATM: Extending Reach Across Bharat',
    excerpt:
      'How interoperable transit, tolling, and assisted-banking channels open new volume for banks and processors.',
    readTime: '5 min read',
  },
  {
    category: 'Switching',
    title: 'Designing for Five Nines: Failover Patterns in High-TPS Switching',
    excerpt:
      'Load balancing, health checks, and instant failover strategies that keep transactions flowing during incidents.',
    readTime: '8 min read',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Payment Infrastructure
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Insights &amp; Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Perspectives on switching, orchestration, issuance, and compliance from the team building bank-grade payment infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pt-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">{article.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      Coming soon
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2 leading-snug">{article.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Want these insights first?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our full library of articles is on the way. In the meantime, talk to our team about your payment infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
