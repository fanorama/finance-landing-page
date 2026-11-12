import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'solid-black' | 'solid-yellow' | 'outline' | 'outline-light'
type Size = 'sm' | 'md'
type Surface = 'yellow' | 'dark'

type CommonProps = {
  variant?: Variant
  size?: Size
  /** Background the button sits on; picks a focus ring that contrasts with it. */
  surface?: Surface
  className?: string
  children: ReactNode
}

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string }

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined }

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold shadow-lg transition duration-300 ease-liquid hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  'solid-black': 'bg-black text-white hover:bg-charcoal',
  'solid-yellow': 'bg-cyber-yellow text-black hover:bg-yellow-200',
  outline: 'border-2 border-black/20 text-black hover:bg-black/5',
  'outline-light': 'border-2 border-white/20 text-white hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5',
  md: 'px-7 py-3.5',
}

// Without a surface, a white ring on a black offset stays visible on both yellow and dark.
const rings: Record<Surface | 'auto', string> = {
  yellow: 'focus-visible:ring-black focus-visible:ring-offset-cyber-yellow',
  dark: 'focus-visible:ring-white focus-visible:ring-offset-onyx',
  auto: 'focus-visible:ring-white focus-visible:ring-offset-black',
}

export default function PillButton({
  variant = 'solid-black',
  size = 'md',
  surface,
  className = '',
  ...rest
}: AnchorProps | ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${rings[surface ?? 'auto']} ${className}`

  if (rest.href !== undefined) {
    return <a className={classes} {...rest} />
  }
  return <button type="button" className={classes} {...rest} />
}
