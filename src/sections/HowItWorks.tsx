import Label from '../components/Label'
import Reveal from '../components/Reveal'

const steps = [
  {
    title: 'Download and sign up',
    description:
      'Get Pocketly from the App Store or Google Play and create your account in under a minute.',
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

const offsets = ['md:mt-0', 'md:mt-16', 'md:mt-32']

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden rounded-tr-[120px] rounded-bl-[100px] bg-charcoal"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:pb-40">
        <Reveal>
          <Label className="text-white/60">How it works</Label>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Up and running in three steps
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className={offsets[index]}>
              <Reveal delay={index * 120}>
                <span
                  aria-hidden="true"
                  className="block text-8xl font-bold leading-none tracking-tight text-cyber-yellow"
                >
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
