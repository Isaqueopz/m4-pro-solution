"use client"

import { LucideIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  images?: string[]
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  images = [],
}: ServiceCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showImages, setShowImages] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleView = () => {
    setShowImages(!showImages)
  }

  return (
    <div className="group relative flex h-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/85 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-indigo-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {!showImages ? (
        // View with icon and text
        <div className="relative z-10 flex h-full flex-col p-8">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 via-blue-800 to-indigo-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-800">
            {title}
          </h3>
          <p className="flex-grow leading-relaxed font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
            {description}
          </p>
          {images.length > 0 && (
            <button
              onClick={toggleView}
              className="mt-4 flex items-center gap-2 self-start text-blue-600 transition-colors duration-200 hover:text-blue-800"
            >
              <span className="text-sm font-medium">View Images</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      ) : (
        // View with image carousel
        <div className="relative z-10 flex h-full flex-col">
          <div className="relative h-56 flex-shrink-0">
            <img
              src={images[currentImageIndex]}
              alt={`${title} ${currentImageIndex + 1}`}
              className="h-full w-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <ChevronLeft className="h-5 w-5 text-slate-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <ChevronRight className="h-5 w-5 text-slate-700" />
                </button>
              </>
            )}

            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "scale-125 bg-white"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex h-24 flex-col justify-center bg-white px-6 py-4">
            <h3 className="mb-3 text-lg leading-tight font-semibold text-slate-900">
              {title}
            </h3>
            <button
              onClick={toggleView}
              className="flex items-center gap-2 self-start rounded-md px-1 py-1 text-blue-600 transition-all duration-200 hover:gap-3 hover:text-blue-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Details</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
