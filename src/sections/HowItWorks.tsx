const steps = [
  {
    title: 'Download and sign up',
    description: 'Get Pocketly from the App Store or Google Play and create your account in under a minute.',
  },
  {
    title: 'Connect your accounts',
    description:
      'Link your banks and cards through a secure, read-only connection. Pocketly never moves your money.',
  },
  {
    title: 'Track and save',
    description:
      'Watch spending sort itself, set budgets and goals, and check in whenever you want a quick overview.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-muted">Up and running in three steps.</p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white"
              >
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
