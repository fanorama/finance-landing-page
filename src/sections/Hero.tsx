import PhoneMockup from '../components/PhoneMockup'

const storeButton =
  'inline-flex min-w-48 items-center gap-3 rounded-control bg-ink px-5 py-3 text-white transition-colors hover:bg-brand-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-linear-to-b from-brand-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            See where your money goes, and keep more of it
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted lg:mx-0">
            Pocketly tracks your spending, sets monthly budgets, and tucks money into savings
            goals, all in one app. Connect your accounts and get a clear picture in minutes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#download" className={storeButton}>
              <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
                <path d="M12 3a4 4 0 0 0-4 4v1H7a3 3 0 0 0-3 3v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6a3 3 0 0 0-3-3h-1V7a4 4 0 0 0-4-4z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[11px]">Download on the</span>
                <span className="block text-lg font-semibold">App Store</span>
              </span>
            </a>
            <a href="#download" className={storeButton}>
              <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
                <path d="M6 3l14 9-14 9V3z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[11px]">Get it on</span>
                <span className="block text-lg font-semibold">Google Play</span>
              </span>
            </a>
          </div>

          <p className="mt-5">
            <a
              href="#how-it-works"
              className="rounded-sm text-sm font-semibold text-brand-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              See how it works →
            </a>
          </p>

          <ul className="mt-8 flex flex-col items-center gap-3 text-sm text-muted sm:flex-row sm:justify-center sm:gap-6 lg:justify-start">
            <li className="flex items-center gap-2">
              <span className="font-semibold text-ink">4.8 ★</span>
              <span>from 12,000+ reviews</span>
            </li>
            <li className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="size-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              <span>Bank-level encryption</span>
            </li>
          </ul>
        </div>

        <PhoneMockup />
      </div>
    </section>
  )
}
