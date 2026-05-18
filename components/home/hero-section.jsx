"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Globe, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'

export default function HeroSection() {
  const { theme } = useTheme()

  return (
    <section className={`relative pt-32 pb-20 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${theme === 'dark' ? 'from-[#030014] via-[#0a0a2a] to-[#030014]' : 'from-gray-50 via-white to-gray-50'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-1/4 left-1/4 w-[40rem] h-[40rem] ${theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-300/30'} rounded-full blur-[120px]`}
          animate={{ x: [0, 100, -50, 0], y: [0, -50, 100, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] ${theme === 'dark' ? 'bg-purple-600/20' : 'bg-purple-300/30'} rounded-full blur-[120px]`}
          animate={{ x: [0, -100, 50, 0], y: [0, 50, -100, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`inline-flex items-center gap-2 ${theme === 'dark' ? 'bg-white/5 border-white/20' : 'bg-black/5 border-black/10'} backdrop-blur-sm border rounded-full px-4 py-2 mb-8`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>Enterprise-Grade Payment Infrastructure</span>
          </motion.div>

          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            The Future of
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% auto' }}
            >
              Global Payments
            </motion.span>
          </h1>

          <motion.p
            className={`text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Empowering financial institutions with next-generation payment switching,
            intelligent routing, and real-time analytics. Built for the future of finance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-cyan-500/25 group">
              <Link href="/contact">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className={`${theme === 'dark' ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'} px-8 py-6 text-lg rounded-full backdrop-blur-sm`}>
              <Link href="/products">Explore Solutions</Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: Zap, value: '< 100ms', desc: 'Processing Time' },
              { icon: Shield, value: '5 Nines', desc: 'Uptime Guarantee' },
              { icon: Globe, value: '50+ Countries', desc: 'Global Coverage' },
            ].map((stat, idx) => (
              <motion.div key={idx} className="relative group" whileHover={{ y: -5 }}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className={`relative ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} backdrop-blur-sm border rounded-2xl p-6 text-center`}>
                  <div className={`w-12 h-12 mx-auto rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20' : 'bg-gradient-to-r from-cyan-100 to-blue-100'} flex items-center justify-center mb-3`}>
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${theme === 'dark' ? 'from-[#030014]' : 'from-gray-50'} to-transparent`} />
    </section>
  )
}
