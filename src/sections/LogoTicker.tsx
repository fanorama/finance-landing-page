import Label from '../components/Label'

// Fictional partner names, rendered as plain text wordmarks.
const partners = [
  { name: 'Alderbank', style: 'font-extrabold tracking-tight' },
  { name: 'Kestrel Pay', style: 'font-medium italic' },
  { name: 'LUMEN CREDIT', style: 'font-bold tracking-widest text-xl' },
  { name: 'orbitrust', style: 'font-bold lowercase' },
  { name: 'Verdant Savings', style: 'font-medium tracking-tight' },
  { name: 'Halcyon Cards', style: 'font-extrabold italic' },
  { name: 'QUILLFIN', style: 'font-bold tracking-widest text-xl' },
  { name: 'Brightmoor', style: 'font-medium' },
]

const css = `
@keyframes ticker-scroll { to { transform: translateX(-50%); } }
.ticker-track { animation: ticker-scroll 40s linear infinite; }
.ticker:hover .ticker-track { animation-play-state: paused; }
`

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center gap-16 pr-16 motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0 ${hidden ? 'motion-reduce:hidden' : ''}`}
    >
      {partners.map((p) => (
        <li key={p.name} className={`whitespace-nowrap text-2xl text-white/60 ${p.style}`}>
          {p.name}
        </li>
      ))}
    </ul>
  )
}

export default function LogoTicker() {
  return (
    <section aria-label="Partners" className="ticker overflow-hidden py-16">
      <style>{css}</style>
      <p className="mb-8 text-center">
        <Label className="text-white/60">Works with banks and cards you already use</Label>
      </p>
      <div className="ticker-track flex w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
        <Row />
        <Row hidden />
      </div>
    </section>
  )
}
