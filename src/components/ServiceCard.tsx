import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group relative flex h-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/85 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-indigo-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 via-blue-800 to-indigo-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-800">
          {title}
        </h3>
        <p className="flex-grow leading-relaxed font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
          {description}
        </p>
      </div>
    </div>
  )
}
