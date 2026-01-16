'use client'

import {
  PaintBucket,
  Sparkles,
  Home,
  RefreshCw,
  Phone,
  Mail,
  Star,
  Shield,
  Clock,
  Award,
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import { useEffect } from 'react'

export default function LandingPage() {
  useEffect(() => {
    const navbar = document.querySelector('nav')

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const windowHeight = window.innerHeight

      // Navbar color change effect
      if (navbar) {
        if (scrolled > 100) {
          navbar.classList.remove('bg-white/95')
          navbar.classList.add('bg-slate-900', 'text-white')

          // Only change navigation links, not logo or button
          const navLinks = navbar.querySelectorAll('a[href^="#"]')
          navLinks.forEach((link) => {
            link.classList.remove('text-slate-700')
            link.classList.add('text-white')
          })

          // Change logo to white/light colors
          const logo = navbar.querySelector('.bg-gradient-to-r')
          if (logo && logo.textContent?.includes('M4 PRO SOLUTIONS')) {
            logo.classList.remove(
              'from-slate-900',
              'via-blue-900',
              'to-indigo-900',
            )
            logo.classList.add('from-gray-100', 'via-white', 'to-gray-200')
          }
        } else {
          navbar.classList.add('bg-white/95')
          navbar.classList.remove('bg-slate-900', 'text-white')

          // Reset navigation links
          const navLinks = navbar.querySelectorAll('a[href^="#"]')
          navLinks.forEach((link) => {
            link.classList.add('text-slate-700')
            link.classList.remove('text-white')
          })

          // Reset logo to dark colors
          const logo = navbar.querySelector('.bg-gradient-to-r')
          if (logo && logo.textContent?.includes('M4 PRO SOLUTIONS')) {
            logo.classList.add(
              'from-slate-900',
              'via-blue-900',
              'to-indigo-900',
            )
            logo.classList.remove('from-gray-100', 'via-white', 'to-gray-200')
          }
        }
      }

      // Simple parallax effects
      const parallaxElements = document.querySelectorAll('.parallax-bg')
      parallaxElements.forEach((element) => {
        const speed = 0.5
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })

      // Section-based blur effect with mobile optimization
      const sections = document.querySelectorAll('section')
      let currentSection = 0

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()

        // Better mobile detection - check if section is in viewport center
        const viewportCenter = windowHeight / 2
        const sectionTop = rect.top
        const sectionBottom = rect.bottom

        // Mobile optimized: section is current if it crosses the viewport center
        if (sectionTop <= viewportCenter && sectionBottom >= viewportCenter) {
          currentSection = index
        } else if (window.innerWidth <= 768) {
          // Additional mobile logic: if section takes up significant viewport
          const sectionHeight = rect.height
          const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
          const visibilityRatio =
            visibleHeight / Math.min(sectionHeight, windowHeight)

          if (visibilityRatio > 0.3) {
            // If more than 30% visible
            currentSection = index
          }
        }
      })

      // Apply blur to sections that are not current (mobile optimized)
      sections.forEach((section, index) => {
        if (index === currentSection) {
          // Current section - clear and visible
          ;(section as HTMLElement).style.filter = 'blur(0px)'
          ;(section as HTMLElement).style.opacity = '1'
          ;(section as HTMLElement).style.transform = 'scale(1)'
        } else {
          // Other sections - blurred (less aggressive on mobile)
          const distance = Math.abs(index - currentSection)
          const isMobile = window.innerWidth <= 768
          const blurAmount = isMobile
            ? Math.min(distance * 2, 4)
            : Math.min(distance * 3, 8)
          const opacityAmount = isMobile
            ? Math.max(0.6, 1 - distance * 0.2)
            : Math.max(0.4, 1 - distance * 0.3)

          ;(section as HTMLElement).style.filter = `blur(${blurAmount}px)`
          ;(section as HTMLElement).style.opacity = `${opacityAmount}`
          ;(section as HTMLElement).style.transform = 'scale(0.98)'
        }
      })

      // Simple reveal animations for elements within current section
      const revealElements = document.querySelectorAll('.scroll-reveal')
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/95 shadow-lg backdrop-blur-xl transition-all duration-500">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="cursor-pointer bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-lg font-bold tracking-tight text-transparent transition-transform duration-300 hover:scale-105 sm:text-2xl">
                M4 PRO SOLUTIONS
              </div>
              <div className="hidden items-center space-x-8 text-slate-700 md:flex">
                <a
                  href="#services"
                  className="group relative font-medium transition-colors duration-300 hover:text-blue-800"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#about"
                  className="group relative font-medium transition-colors duration-300 hover:text-blue-800"
                >
                  About
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="group relative font-medium transition-colors duration-300 hover:text-blue-800"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="mailto:hermessonmeiraus@gmail.com?subject=Quote%20Request"
                className="transform rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-4 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 pt-20 pb-16 transition-all duration-1000 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">
        {/* Subtle apartment background */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-50"
          style={{
            backgroundImage: 'url("/apartment-bg.jpg")',
            backgroundPosition: 'center 75%',
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/5 via-blue-900/5 to-indigo-900/5 transition-all duration-1000"></div>
        <div className="parallax-bg floating-element absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-slate-700 to-blue-900 opacity-10 blur-3xl"></div>
        <div className="parallax-bg floating-element absolute right-10 bottom-10 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-800 to-indigo-900 opacity-10 blur-3xl delay-1000"></div>

        {/* Additional floating visual elements */}
        <div className="floating-element pulse-element absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 blur-2xl"></div>
        <div className="floating-element pulse-element absolute bottom-1/3 left-1/3 h-48 w-48 rounded-full bg-gradient-to-br from-slate-600/15 to-indigo-600/15 blur-3xl"></div>
        <div className="floating-element absolute top-1/2 left-1/4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-400/30 to-slate-500/30 blur-xl"></div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="animate-fade-in-up scroll-reveal">
            <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight lg:text-7xl">
              <span className="animate-gradient-x bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 bg-clip-text text-transparent">
                Seamless Apartment
              </span>
              <span className="animate-gradient-x block bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent delay-300">
                Transitions
              </span>
            </h1>
            <p className="animate-fade-in-up mx-auto mb-10 max-w-4xl text-xl leading-relaxed font-medium text-slate-700 delay-200 lg:text-2xl">
              Professional painting, deep cleaning, and complete restoration
              services for apartment turnovers. We handle every detail so you
              can focus on what matters most.
            </p>
            <div className="animate-fade-in-up scroll-reveal flex flex-col justify-center gap-4 delay-400 sm:flex-row">
              <a
                href="mailto:hermessonmeiraus@gmail.com?subject=Get%20Started%20-%20Apartment%20Rehabilitation&body=Hi%20M4%20PRO%20SOLUTION,%0A%0AI'm%20interested%20in%20your%20apartment%20rehabilitation%20services.%20Please%20contact%20me%20to%20discuss%20my%20project.%0A%0AThank%20you!"
                className="group relative transform overflow-hidden rounded-full bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-110 hover:from-slate-900 hover:via-blue-900 hover:to-indigo-950 hover:shadow-2xl"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </a>
              <a
                href="#services"
                className="group relative overflow-hidden rounded-full border-2 border-slate-700 px-8 py-4 text-lg font-semibold text-slate-700 transition-all duration-500 hover:scale-110 hover:bg-slate-800 hover:text-white hover:shadow-lg"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 origin-left scale-x-0 bg-slate-800 transition-transform duration-500 group-hover:scale-x-100"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The General Management Concept */}
      <section
        id="about"
        className="scroll-reveal relative bg-gradient-to-b from-white to-slate-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/3 to-blue-900/3"></div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="animate-fade-in-up">
            <h2 className="mb-8 text-4xl font-bold tracking-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
                A Complete Solution for
              </span>
              <span className="block bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Apartment Rehabilitation
              </span>
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed font-medium text-slate-700">
              M4 PRO SOLUTIONS revolutionizes apartment turnovers by providing
              comprehensive rehabilitation services. From professional painting
              to deep cleaning and full restoration, we ensure every unit meets
              the highest standards for incoming tenants while maximizing
              property value.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="animate-fade-in-up delay-100">
              <div className="group rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-blue-800 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  Insured & Bonded
                </h3>
                <p className="text-slate-600">
                  Full insurance coverage and bonding for your peace of mind
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="group rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-indigo-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  Fast Turnaround
                </h3>
                <p className="text-slate-600">
                  Quick and efficient service to minimize vacancy periods
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="group rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-800 to-slate-800 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  High-Quality Standards
                </h3>
                <p className="text-slate-600">
                  Premium materials and expert craftsmanship guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        className="scroll-reveal relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-800/3 via-transparent to-blue-900/3"></div>
        <div className="absolute top-10 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-slate-700/10 to-blue-800/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-800/10 to-indigo-900/10 blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="scroll-reveal mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
                Our Premium{' '}
              </span>
              <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Comprehensive turnover and make-ready services designed for
              property managers and apartment communities
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="scroll-reveal">
              <ServiceCard
                icon={PaintBucket}
                title="Professional Painting"
                description="Complete turnover painting with premium paints and expert application for a fresh, move-in ready appearance."
              />
            </div>
            <div className="scroll-reveal">
              <ServiceCard
                icon={Sparkles}
                title="Carpet Cleaning"
                description="Deep extraction carpet cleaning that removes stains, odors, and allergens for pristine flooring."
              />
            </div>
            <div className="scroll-reveal">
              <ServiceCard
                icon={Home}
                title="Full Unit Cleaning"
                description="Comprehensive move-in/move-out cleaning covering every surface, fixture, and detail."
              />
            </div>
            <div className="scroll-reveal">
              <ServiceCard
                icon={RefreshCw}
                title="Full Room Restoration"
                description="Complete rehabilitation including repairs, refinishing, and restoration to like-new condition."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Why Choose M4 PRO SOLUTIONS?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We understand the unique challenges of apartment management and
              deliver solutions that work
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600">
                    Over 1000+ successful apartment turnovers with consistently
                    high satisfaction rates
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Fully Licensed & Insured
                  </h3>
                  <p className="text-gray-600">
                    Complete insurance coverage and professional licensing for
                    your protection
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Fast Turnaround Times
                  </h3>
                  <p className="text-gray-600">
                    Minimize vacancy periods with our efficient scheduling and
                    rapid completion
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Premium Quality Standards
                  </h3>
                  <p className="text-gray-600">
                    Only the finest materials and expert craftsmanship for
                    lasting results
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-900 p-8 text-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="mb-6 text-3xl font-bold tracking-tight">
                  Ready to Transform Your Properties?
                </h3>
                <p className="mb-8 text-lg font-medium text-blue-100">
                  Join hundreds of satisfied property managers who trust M4 PRO
                  SOLUTIONS for their apartment rehabilitation needs.
                </p>
                <a
                  href="mailto:hermessonmeiraus@gmail.com?subject=Free%20Quote%20Request&body=Hello%20M4%20PRO%20SOLUTION,%0A%0AI%20would%20like%20to%20receive%20a%20free%20quote%20for%20apartment%20rehabilitation%20services.%0A%0AProject%20Details:%0A-%20Property%20location:%20%0A-%20Number%20of%20units:%20%0A-%20Services%20needed:%20%0A-%20Timeline:%20%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you!"
                  className="rounded-full bg-white/95 px-8 py-3 font-semibold text-slate-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
                >
                  Get Your Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-blue-900/10"></div>
        <div className="absolute top-300 left-2 h-960 w-960 animate-pulse rounded-full bg-gradient-to-br from-slate-700/15 to-blue-800/15 blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-blue-800/15 to-indigo-900/15 blur-3xl delay-1000"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="animate-fade-in-up mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-3xl text-xl font-medium text-slate-300">
              Ready to elevate your apartment turnovers? Contact us for a
              personalized consultation
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="animate-fade-in-up delay-100">
                <div className="group flex items-center space-x-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white/15">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-800 to-indigo-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <p className="text-slate-300">hermessonmeiraus@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="hover:shadow-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-gray-800/90 p-8 text-white shadow-2xl backdrop-blur-lg transition-all duration-500 hover:scale-105">
                <h3 className="mb-6 text-3xl font-bold tracking-tight">
                  Ready to Get Started?
                </h3>
                <p className="mb-8 text-lg font-medium text-slate-200">
                  Contact us directly for a personalized quote and consultation
                  for your apartment rehabilitation needs.
                </p>
                <a
                  href="mailto:hermessonmeiraus@gmail.com?subject=Apartment%20Rehabilitation%20Quote%20Request&body=Hello%20M4%20PRO%20SOLUTION,%0A%0AI%20would%20like%20to%20request%20a%20quote%20for%20apartment%20rehabilitation%20services.%0A%0AProperty%20Details:%0A-%20Number%20of%20units:%20%0A-%20Services%20needed:%20%0A-%20Location:%20%0A-%20Timeline:%20%0A%0APlease%20contact%20me%20to%20discuss%20further.%0A%0AThank%20you!"
                  className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-500 hover:scale-110 hover:from-slate-900 hover:via-blue-900 hover:to-indigo-950 hover:shadow-xl"
                >
                  <span className="relative z-10">
                    Send Email Quote Request
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-4 bg-gradient-to-r from-slate-300 via-blue-300 to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
            M4 PRO SOLUTIONS
          </div>
          <p className="mb-8 font-medium text-slate-400">
            Professional Apartment Rehabilitation Services
          </p>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              © 2026 M4 PRO SOLUTIONS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
