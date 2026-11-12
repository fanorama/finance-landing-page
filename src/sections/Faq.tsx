import Label from '../components/Label'
import Reveal from '../components/Reveal'

const faqs = [
  {
    question: 'Is my financial data secure?',
    answer:
      'Yes. Your data is encrypted in transit and at rest, and bank connections are read-only, so Pocketly can see transactions but can never move money.',
  },
  {
    question: 'Which banks does Pocketly support?',
    answer:
      'Pocketly connects to thousands of banks, credit unions, and card issuers. Search for yours in the app before you sign up.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'The Free plan costs nothing and has no time limit. Pro adds unlimited accounts, goals, and exports for a monthly fee.',
  },
  {
    question: 'Can I export my data?',
    answer: 'Pro users can export all transactions to CSV at any time. Free users can request an export from support.',
  },
  {
    question: 'How do I cancel Pro?',
    answer:
      'Open Settings, tap Subscription, and choose Cancel. You keep Pro until the end of the period you already paid for.',
  },
  {
    question: 'What happens to my data if I delete my account?',
    answer: 'Deleting your account removes your profile and transaction history from our servers within 30 days.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Reveal>
        <Label className="text-white/60">FAQ</Label>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
          Frequently asked questions
        </h2>
      </Reveal>

      <div className="mt-12 space-y-3">
        {faqs.map((faq) => (
          <Reveal key={faq.question}>
            <details className="group overflow-hidden rounded-[32px] bg-charcoal">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[32px] px-6 py-5 text-base font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-cyber-yellow" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" className="group-open:hidden" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-white/70">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
