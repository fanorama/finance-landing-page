import { BarChart3, Bell, CalendarClock, Layers, PiggyBank, ReceiptText } from 'lucide-react'

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

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to stay on top of your money
        </h2>
        <p className="mt-4 text-lg text-muted">
          Six tools that work together, so budgeting stops feeling like a second job.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <li key={title} className="rounded-card border border-line bg-white p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-control bg-brand-100 text-brand-700">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-muted">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
