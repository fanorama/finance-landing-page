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
  { value: '500K+', label: 'Downloads' },
  { value: '4.8 / 5', label: 'Average rating' },
  { value: '$18M', label: 'Saved by our users' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by people who hate budgeting
        </h2>
      </div>

      <dl className="mt-10 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="mt-1 text-3xl font-extrabold text-brand-700">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="flex h-full flex-col rounded-card border border-line bg-white p-6">
              <blockquote className="flex-1 text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700"
                >
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
