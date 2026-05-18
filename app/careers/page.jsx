import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Briefcase, Users, Heart, Rocket, Coffee, GraduationCap, Shield, TrendingUp, Code, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Careers | Paynext',
  description: 'Join the Paynext team and help build the future of payment technology.',
}

// Updated why work with us section
const whyWorkWithUs = [
  { icon: Code, title: 'Enterprise-Grade Fintech Infrastructure', description: 'Build and scale systems that power millions of transactions' },
  { icon: Globe, title: 'Banking & Network Ecosystems', description: 'Work with leading banks and payment networks' },
  { icon: TrendingUp, title: 'High-Performance Engineering', description: 'Join a culture of excellence and technical innovation' },
  { icon: Shield, title: 'Growth-Focused Environment', description: 'Accelerate your career with continuous learning opportunities' },
]

// Departments we're hiring for
const departments = ['Engineering', 'Product', 'Risk', 'Compliance', 'Sales']

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Careers</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join a Team Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Next-Generation Payment Infrastructure
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're building the future of payments. Join us to work on enterprise-grade fintech infrastructure 
              that powers millions of transactions every day.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With PayNext */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why Work With PayNext</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Build the Future of Fintech
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkWithUs.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments We're Hiring For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Open Opportunities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              We Welcome Professionals Across
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {departments.map((dept, index) => (
              <Badge key={index} className="px-6 py-3 text-base bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors">
                {dept}
              </Badge>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              And more! If you're passionate about fintech and want to make an impact, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in building the next generation of payment infrastructure. 
              Send us your resume and let's start a conversation.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="mailto:careers@paynext.com">
                Send Your Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}