"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const products = [
    {
      name: "POS / MPOS",
      href: "/products/POS-MPOS",
      description:
        "Seamless in-store payment acceptance via POS and mobile POS devices",
      icon: "💳",
    },
    {
      name: "E-Commerce Gateway",
      href: "/products/E-commerceGateway",
      description:
        "Secure and scalable online payment processing for web and mobile platforms",
      icon: "🌐",
    },
    {
      name: "Bharat QR & UPI",
      href: "/products/BharatQR-UPI",
      description:
        "Instant QR and UPI-based payment solutions for fast and contactless transactions",
      icon: "📱",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Careers", href: "/careers" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Animated gradient bar at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo - Left */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <div className="flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="PayNext Logo" 
                  className="h-10 w-auto brightness-0 invert" 
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              className="relative inline-flex items-center justify-center rounded-lg p-2.5 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>

          {/* ── Desktop Navigation - Center ── */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}

            {/* Products dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.6 }}
              className="relative"
            >
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-x-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 `}
                    aria-hidden="true"
                  />
                </button>

                {productsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 pt-6 w-screen max-w-md">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden rounded-xl bg-slate-900/98 backdrop-blur-xl border border-white/10 shadow-2xl"
                    >
                      <div className="p-2">
                        {products.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group relative flex items-center gap-x-4 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                            onClick={() => setProductsOpen(false)}
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <div>
                              <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                {item.name}
                              </span>
                              <p className="mt-1 text-sm text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Get Started Button - Right */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <Zap className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Slide-in panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm border-l border-white/10 shadow-2xl"
              >
                {/* Header row */}
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src="/logo.png"
                        alt="PayNext Logo"
                        className="h-12 w-auto brightness-0 invert"
                      />
                    </div>
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="rounded-lg p-2.5 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </motion.button>
                </div>

                <div className="flex flex-col gap-1">
                  {/* Regular nav links */}
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Products accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                  >
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    >
                      <span>Products</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-1 ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                            {products.map((item, index) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.06 }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/10 transition-all duration-200"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <span className="text-xl leading-none">
                                    {item.icon}
                                  </span>
                                  <div>
                                    <p className="text-sm font-medium text-white">
                                      {item.name}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-white/10" />

                {/* Get Started button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                      <Zap className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex items-center justify-center gap-3"
                >
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <Shield className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-gray-400">PCI-DSS</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <Shield className="w-3 h-3 text-purple-400" />
                    <span className="text-xs text-gray-400">Certified TSP</span>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}