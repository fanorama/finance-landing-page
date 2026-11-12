import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  icon?: ReactNode
  variant?: 'glass' | 'yellow'
  className?: string
}

const variants = {
  glass: 'border border-white/20 bg-white/10 text-white backdrop-blur-2xl',
  yellow: 'bg-cyber-yellow text-black',
}

export default function Badge({ children, icon, variant = 'glass', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${variants[variant]} ${className}`}
    >
      {icon && (
        <span
          aria-hidden="true"
          className={`flex size-4 items-center justify-center ${variant === 'glass' ? 'text-cyber-yellow' : 'text-black'}`}
        >
          {icon}
        </span>
      )}
      {children}
    </span>
  )
}
