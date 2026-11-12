const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Everything you need to start tracking.',
    features: ['Up to 2 connected accounts', 'Automatic categorization', '3 budgets', 'Weekly spending summary'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$6',
    description: 'For people who want the full picture.',
    features: [
      'Unlimited connected accounts',
      'Unlimited budgets and savings goals',
      'Bill reminders and calendar',
      'Spending insights and CSV export',
    ],
    cta: 'Start Pro',
    highlighted: true,
  },
]

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-brand-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, honest pricing</h2>
          <p className="mt-4 text-lg text-muted">Start free. Upgrade only when you need more.</p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={
                plan.highlighted
                  ? 'rounded-card border-2 border-brand-600 bg-white p-8 shadow-lg'
                  : 'rounded-card border border-line bg-white p-8'
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted"> / month</span>
              </p>
              <p className="mt-2 text-muted">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={
                  plan.highlighted
                    ? 'mt-8 block rounded-control bg-brand-600 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
                    : 'mt-8 block rounded-control border border-line px-5 py-3 text-center font-semibold transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
                }
              >
                {plan.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
