import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const skipAnimation = () =>
  typeof IntersectionObserver === 'undefined' ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(skipAnimation)

  useEffect(() => {
    const node = ref.current
    if (visible || !node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-liquid ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
