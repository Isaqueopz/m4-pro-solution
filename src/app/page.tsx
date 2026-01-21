"use client"

import Image from "next/image"
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import { useEffect, useState } from "react"

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Isaque Misael",
    title: "Property Manager, Downtown Residences",
    text: "M4 PRO SOLUTIONS transformed our complex beyond expectations. Their attention to detail is remarkable - every unit looks brand new and tenants are amazed.",
    initials: "IM",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    name: "Luis Oliveira",
    title: "CEO, Lone Star Properties",
    text: "Outstanding service! Completed our 15-unit project in record time without compromising quality. Professional, reliable, and results speak for themselves.",
    initials: "LO",
    gradient: "from-slate-600 to-gray-700",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Portfolio Manager, Luxury Apartments",
    text: "We've worked with several contractors over the years, but M4 PRO SOLUTIONS is in a league of their own. Fast, efficient, and incredibly thorough. Our vacancy periods have been cut in half!",
    initials: "SJ",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    id: 4,
    name: "Michael Thompson",
    title: "Property Management Director",
    text: "Their full room restoration service is absolutely phenomenal. What used to take weeks with multiple contractors, M4 PRO completes in days with superior results. They've become our go-to partner.",
    initials: "MT",
    gradient: "from-green-600 to-teal-600",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    title: "Real Estate Developer",
    text: "Professional, punctual, and precise. M4 PRO SOLUTIONS has helped us flip over 50 properties this year. Their carpet cleaning alone has saved us thousands in replacement costs.",
    initials: "ER",
    gradient: "from-rose-600 to-pink-600",
  },
  {
    id: 6,
    name: "David Miller",
    title: "Apartment Complex Owner",
    text: "The transformation they achieved in our 200-unit complex was remarkable. From outdated to modern in just 3 weeks. Tenants are staying longer and we're getting premium rates.",
    initials: "DM",
    gradient: "from-orange-600 to-red-600",
  },
  {
    id: 7,
    name: "Jessica Wilson",
    title: "Investment Property Manager",
    text: "M4 PRO SOLUTIONS doesn't just clean and paint - they elevate properties. Their attention to detail and commitment to excellence has increased our property values significantly.",
    initials: "JW",
    gradient: "from-cyan-600 to-blue-600",
  },
]

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        nextTestimonial()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isAutoPlaying])

  // Get current testimonials to display (3 at a time on desktop)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <div className="relative">
      {/* Main carousel */}
      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${currentIndex}`}
            className="group relative flex h-80 flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeInUp 0.6s ease-out forwards",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10 flex h-full flex-col p-8">
              <div className="mb-6 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mb-6 flex-grow text-lg leading-relaxed font-medium text-gray-700">
                "{testimonial.text}"
              </blockquote>
              <div className="mt-auto flex items-center">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} font-semibold text-white`}
                >
                  {testimonial.initials}
                </div>
                <div className="ml-4 min-w-0 flex-1">
                  <div className="text-base leading-tight font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="mt-1 text-sm leading-tight text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 z-10 translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Next testimonials"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      {/* Dots indicator */}
      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "scale-125 bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 w-full rounded-full bg-gray-200">
        <div
          className="h-1 rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  useEffect(() => {
    const navbar = document.querySelector("nav")

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const windowHeight = window.innerHeight

      // Enhanced Navbar color change effect
      if (navbar) {
        if (scrolled > 100) {
          navbar.classList.remove("bg-white/90", "border-slate-200/20")
          navbar.classList.add(
            "bg-slate-900/95",
            "border-slate-700/30",
            "text-white",
          )

          // Change navigation links
          const navLinks = navbar.querySelectorAll('a[href^="#"]')
          navLinks.forEach((link) => {
            link.classList.remove("text-slate-700", "hover:text-blue-700")
            link.classList.add("text-white", "hover:text-blue-300")
          })

          // Add subtle white outline to logo for dark header
          const logoImg = navbar.querySelector(".logo-icon img") as HTMLElement
          if (logoImg) {
            logoImg.style.filter =
              "drop-shadow(0.5px 0.5px 0px rgba(255,255,255,0.6)) drop-shadow(-0.5px -0.5px 0px rgba(255,255,255,0.6)) drop-shadow(0.5px -0.5px 0px rgba(255,255,255,0.6)) drop-shadow(-0.5px 0.5px 0px rgba(255,255,255,0.6))"
          }
        } else {
          navbar.classList.add("bg-white/90", "border-slate-200/20")
          navbar.classList.remove(
            "bg-slate-900/95",
            "border-slate-700/30",
            "text-white",
          )

          // Reset navigation links
          const navLinks = navbar.querySelectorAll('a[href^="#"]')
          navLinks.forEach((link) => {
            link.classList.add("text-slate-700", "hover:text-blue-700")
            link.classList.remove("text-white", "hover:text-blue-300")
          })

          // Remove outline from logo
          const logoImg = navbar.querySelector(".logo-icon img") as HTMLElement
          if (logoImg) {
            logoImg.style.filter = ""
          }
        }
      }

      // Simple parallax effects
      const parallaxElements = document.querySelectorAll(".parallax-bg")
      parallaxElements.forEach((element) => {
        const speed = 0.5
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })

      // Section-based blur effect with mobile optimization
      const sections = document.querySelectorAll("section")
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
          ;(section as HTMLElement).style.filter = "blur(0px)"
          ;(section as HTMLElement).style.opacity = "1"
          ;(section as HTMLElement).style.transform = "scale(1)"
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
          ;(section as HTMLElement).style.transform = "scale(0.98)"
        }
      })

      // Simple reveal animations for elements within current section
      const revealElements = document.querySelectorAll(".scroll-reveal")
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("revealed")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/20 bg-white/90 shadow-sm backdrop-blur-2xl transition-all duration-500 hover:shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-center sm:h-22 md:h-24">
            {/* Logo Section - Centered */}
            <div className="absolute left-4 flex items-center sm:left-6 lg:left-8">
              <div className="relative">
                {/* Logo Image */}
                <div className="logo-icon transition-all duration-300 hover:scale-105">
                  <Image
                    src="/logo.png"
                    alt="M4 PRO SOLUTIONS Logo"
                    width={290}
                    height={140}
                    className="h-20 w-auto object-contain drop-shadow-sm filter transition-all duration-300 sm:h-22 md:h-35"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden items-center space-x-10 md:flex">
              <a
                href="#services"
                className="group relative px-4 py-2 font-semibold text-slate-700 transition-all duration-300 hover:text-blue-700"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 scale-0 rounded-lg bg-blue-50 transition-transform duration-300 group-hover:scale-100"></div>
                <span className="absolute right-4 -bottom-1 left-4 h-0.5 scale-x-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#about"
                className="group relative px-4 py-2 font-semibold text-slate-700 transition-all duration-300 hover:text-blue-700"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 scale-0 rounded-lg bg-blue-50 transition-transform duration-300 group-hover:scale-100"></div>
                <span className="absolute right-4 -bottom-1 left-4 h-0.5 scale-x-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#contact"
                className="group relative px-4 py-2 font-semibold text-slate-700 transition-all duration-300 hover:text-blue-700"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 scale-0 rounded-lg bg-blue-50 transition-transform duration-300 group-hover:scale-100"></div>
                <span className="absolute right-4 -bottom-1 left-4 h-0.5 scale-x-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>

            {/* Right Side - CTA & Mobile Menu */}
            <div className="absolute right-4 flex items-center space-x-4 sm:right-6 lg:right-8">
              {/* CTA Button */}
              <a
                href="mailto:hermessonmeiraus@gmail.com?subject=Quote%20Request"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-7 sm:py-3.5 sm:text-base"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Quote</span>
                  <Mail className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </a>

              {/* Mobile Menu Button */}
              <button
                id="mobile-menu-button"
                className="relative h-10 w-10 rounded-lg bg-slate-100 transition-all duration-300 hover:bg-slate-200 focus:outline-none md:hidden"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu")
                  const button = document.getElementById("mobile-menu-button")
                  if (menu && button) {
                    menu.classList.toggle("hidden")
                    button.classList.toggle("active")
                  }
                }}
              >
                <div className="flex flex-col items-center justify-center space-y-1">
                  <span className="block h-0.5 w-5 bg-slate-700 transition-all duration-300"></span>
                  <span className="block h-0.5 w-5 bg-slate-700 transition-all duration-300"></span>
                  <span className="block h-0.5 w-5 bg-slate-700 transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-4 px-4 py-6">
              <a
                href="#services"
                className="flex items-center space-x-3 rounded-lg px-4 py-3 text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <PaintBucket className="h-5 w-5" />
                <span>Services</span>
              </a>
              <a
                href="#about"
                className="flex items-center space-x-3 rounded-lg px-4 py-3 text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <Shield className="h-5 w-5" />
                <span>About</span>
              </a>
              <a
                href="#contact"
                className="flex items-center space-x-3 rounded-lg px-4 py-3 text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <Phone className="h-5 w-5" />
                <span>Contact</span>
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
            backgroundPosition: "center 44%",
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
            <p className="animate-fade-in-up mx-auto mb-10 text-center text-2xl leading-relaxed font-bold tracking-wide text-slate-700 italic delay-200 lg:text-3xl">
              Every solution you need in one place
            </p>
            <div className="animate-fade-in-up scroll-reveal mt-27 flex flex-col justify-center gap-4 delay-400 sm:flex-row">
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
        style={{
          backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.5), rgba(241, 245, 249, 0.5)), url('/apartment-bg1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-800/3 via-transparent to-blue-900/3"></div>
        <div className="absolute top-10 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-slate-700/10 to-blue-800/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-800/10 to-indigo-900/10 blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="scroll-reveal mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
                Our Premium{" "}
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
                images={[
                  "/painting-1.jpg",
                  "/painting-2.jpg",
                  "/painting-3.jpg",
                ]}
              />
            </div>
            <div className="scroll-reveal">
              <ServiceCard
                icon={Sparkles}
                title="Carpet Cleaning"
                description="Deep extraction carpet cleaning that removes stains, odors, and allergens for pristine flooring."
                images={[
                  "/carpet-cleaning-1.jpg",
                  "/carpet-cleaning-2.jpg",
                  "/carpet-cleaning-3.jpg",
                ]}
              />
            </div>
            <div className="scroll-reveal">
              <ServiceCard
                icon={Home}
                title="Full Unit Cleaning"
                description="Comprehensive move-in/move-out cleaning covering every surface, fixture, and detail."
                images={[
                  "/unit-cleaning-1.jpg",
                  "/unit-cleaning-2.jpg",
                  "/unit-cleaning-3.jpg",
                ]}
              />
            </div>
            <div className="scroll-reveal">
              <ServiceCard
                icon={RefreshCw}
                title="Full Room Restoration"
                description="Complete rehabilitation including repairs, refinishing, and restoration to like-new condition."
                images={[
                  "/restoration-1.jpg",
                  "/restoration-2.jpg",
                  "/restoration-3.jpg",
                ]}
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

      {/* Customer Reviews */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 px-4 py-20 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.7), rgba(241, 245, 249, 0.7)), url('/handshake-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Don't just take our word for it - hear from property managers who
              trust M4 PRO SOLUTIONS
            </p>
          </div>

          <TestimonialCarousel />

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="group">
              <div className="mb-3 text-3xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                500+
              </div>
              <div className="text-sm font-medium tracking-wide text-gray-600 uppercase">
                Projects Completed
              </div>
            </div>
            <div className="group">
              <div className="mb-3 text-3xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                98%
              </div>
              <div className="text-sm font-medium tracking-wide text-gray-600 uppercase">
                Satisfaction Rate
              </div>
            </div>
            <div className="group">
              <div className="mb-3 text-3xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                5★
              </div>
              <div className="text-sm font-medium tracking-wide text-gray-600 uppercase">
                Average Rating
              </div>
            </div>
            <div className="group">
              <div className="mb-3 text-3xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                24h
              </div>
              <div className="text-sm font-medium tracking-wide text-gray-600 uppercase">
                Response Time
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
