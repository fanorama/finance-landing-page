import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'solid-black' | 'solid-yellow' | 'outline' | 'outline-light'

type CommonProps = {
  variant?: Variant
  className?: string
  children: ReactNode
}

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string }

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined }

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition duration-300 ease-liquid hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black'

const variants: Record<Variant, string> = {
  'solid-black': 'bg-black text-white',
  'solid-yellow': 'bg-cyber-yellow text-black',
  outline: 'border-2 border-black/20 text-black',
  'outline-light': 'border-2 border-white/20 text-white',
}

export default function PillButton({ variant = 'solid-black', className = '', ...rest }: AnchorProps | ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (rest.href !== undefined) {
    return <a className={classes} {...rest} />
  }
  return <button type="button" className={classes} {...rest} />
}
