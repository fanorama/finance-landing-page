import Label from './Label'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#download', label: 'Download' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-onyx">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-extrabold tracking-tight text-white">Pocketly</p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Personal finance, made simple.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-onyx"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-white/40">
        <Label>© {new Date().getFullYear()} Pocketly. All rights reserved.</Label>
      </div>
    </footer>
  )
}
