import type { HTMLAttributes } from 'react'

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  float?: boolean
}

export default function GlassCard({ float = false, className = '', children, ...rest }: GlassCardProps) {
  return (
    <div
      className={`rounded-[32px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl ${float ? 'animate-float' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
