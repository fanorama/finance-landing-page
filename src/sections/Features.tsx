import { BarChart3, Bell, CalendarClock, Layers, PiggyBank, ReceiptText } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import Label from '../components/Label'
import Reveal from '../components/Reveal'

const features = [
  {
    icon: ReceiptText,
    title: 'Automatic expense tracking',
    description:
      'Every card payment and transfer is sorted into a category as it happens, so you never log a coffee by hand.',
  },
  {
    icon: Bell,
    title: 'Budgets with alerts',
    description:
      'Set a monthly limit per category. Pocketly warns you at 80% so you can adjust before you overspend.',
  },
  {
    icon: PiggyBank,
    title: 'Savings goals',
    description:
      'Name a goal, set a target date, and see exactly how much to set aside each week to get there.',
  },
  {
    icon: CalendarClock,
    title: 'Bill reminders',
    description:
      'Rent, subscriptions, and utilities show up on one calendar, with a nudge before each due date.',
  },
  {
    icon: BarChart3,
    title: 'Spending insights',
    description:
      'Simple charts show where your money went this week and how it compares with last month.',
  },
  {
    icon: Layers,
    title: 'Multi-account sync',
    description:
      'Bring checking, savings, and credit cards into one view and keep balances up to date automatically.',
  },
]

const [featured, ...others] = features

export default function Features() {
  const FeaturedIcon = featured.icon

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <Label className="text-white/60">Features</Label>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Everything you need to stay on top of your money
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">
          Six tools that work together, so budgeting stops feeling like a second job.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <li className="md:col-span-2 lg:row-span-2">
          <Reveal className="h-full">
            <GlassCard className="flex h-full min-h-72 flex-col justify-between p-8 sm:p-10">
              <span className="flex size-14 items-center justify-center rounded-full bg-cyber-yellow text-black">
                <FeaturedIcon className="size-7" aria-hidden="true" />
              </span>
              <div className="mt-16">
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                  {featured.description}
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </li>

        {others.map(({ icon: Icon, title, description }, index) => (
          <li key={title}>
            <Reveal className="h-full" delay={(index % 3) * 100}>
              <div className="h-full rounded-[32px] border border-white/10 bg-charcoal p-7">
                <Icon className="size-7 text-cyber-yellow" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
