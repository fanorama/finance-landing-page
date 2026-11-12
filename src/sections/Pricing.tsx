import Label from '../components/Label'
import PillButton from '../components/PillButton'
import Reveal from '../components/Reveal'

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Everything you need to start tracking.',
    features: [
      'Up to 2 connected accounts',
      'Automatic categorization',
      '3 budgets',
      'Weekly spending summary',
    ],
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

function Check({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`mt-0.5 size-5 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <Label className="text-white/60">Pricing</Label>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Simple, honest pricing
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">
          Start free. Upgrade only when you need more.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-5 md:grid-cols-2">
        {plans.map((plan, index) => (
          <li key={plan.name}>
            <Reveal className="h-full" delay={index * 100}>
              <div
                className={`flex h-full flex-col rounded-[32px] p-8 sm:p-10 ${
                  plan.highlighted
                    ? 'border border-transparent bg-cyber-yellow text-black'
                    : 'border border-white/10 bg-charcoal text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-6">
                  <span className="text-6xl font-bold tracking-tight">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-black/70' : 'text-white/70'}> / month</span>
                </p>
                <p className={`mt-2 text-sm ${plan.highlighted ? 'text-black/70' : 'text-white/70'}`}>
                  {plan.description}
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className={plan.highlighted ? 'text-black' : 'text-cyber-yellow'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  {plan.highlighted ? (
                    <PillButton href="#download" surface="yellow" className="w-full">
                      {plan.cta}
                    </PillButton>
                  ) : (
                    <PillButton href="#download" variant="outline-light" surface="dark" className="w-full">
                      {plan.cta}
                    </PillButton>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
