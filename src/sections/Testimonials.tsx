import GlassCard from '../components/GlassCard'
import Label from '../components/Label'
import Reveal from '../components/Reveal'

const testimonials = [
  {
    quote:
      'I finally know where my paycheck goes. Within two weeks I found three subscriptions I had forgotten about.',
    name: 'Alex Rivera',
    role: 'Freelance designer',
  },
  {
    quote:
      'The budget alerts are the only reason I stayed under my grocery limit for six months straight.',
    name: 'Jordan Lee',
    role: 'Teacher',
  },
  {
    quote:
      'Setting a savings goal with a date made it real. We hit our vacation fund two months early.',
    name: 'Sam Patel',
    role: 'Product manager',
  },
]

const stats = [
  { value: '500K+', label: 'Downloads', accent: true },
  { value: '4.8', label: 'Average rating', accent: false },
  { value: '$18M', label: 'Saved by our users', accent: false },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <Label className="text-white/60">Testimonials</Label>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Loved by people who hate budgeting
        </h2>
      </Reveal>

      <Reveal>
        <dl className="mt-14 grid gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd
                className={`text-6xl font-bold tracking-tight md:text-7xl ${stat.accent ? 'text-cyber-yellow' : 'text-white'}`}
              >
                {stat.value}
              </dd>
              <dt className="mt-2">
                <Label className="text-white/60">{stat.label}</Label>
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>

      <ul className="mt-16 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <li key={t.name}>
            <Reveal className="h-full" delay={index * 100}>
              <GlassCard className="h-full p-8">
                <figure className="flex h-full flex-col">
                  <blockquote className="flex-1 text-lg font-medium leading-snug text-white">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-11 items-center justify-center rounded-full bg-cyber-yellow text-sm font-bold text-black"
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">{t.name}</span>
                      <span className="block text-sm text-white/70">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </GlassCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
