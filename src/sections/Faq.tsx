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
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Frequently asked questions
      </h2>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-1 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden">
              {faq.question}
              <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p className="mt-3 text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
