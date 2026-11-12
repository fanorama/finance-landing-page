import type { ReactNode } from 'react'

type LabelProps = {
  children: ReactNode
  className?: string
}

export default function Label({ children, className = '' }: LabelProps) {
  return (
    <span className={`text-[10px] font-bold uppercase tracking-widest ${className}`}>
      {children}
    </span>
  )
}
