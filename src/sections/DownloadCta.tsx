const storeButton =
  'inline-flex min-w-48 items-center gap-3 rounded-control bg-white px-5 py-3 text-ink transition-colors hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export default function DownloadCta() {
  return (
    <section id="download" className="bg-brand-700">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Take control of your money today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
          Download Pocketly for free and see your full financial picture in minutes.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#" className={storeButton}>
            <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
              <path d="M12 3a4 4 0 0 0-4 4v1H7a3 3 0 0 0-3 3v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6a3 3 0 0 0-3-3h-1V7a4 4 0 0 0-4-4z" />
            </svg>
            <span className="text-left leading-tight">
              <span className="block text-[11px]">Download on the</span>
              <span className="block text-lg font-semibold">App Store</span>
            </span>
          </a>
          <a href="#" className={storeButton}>
            <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
              <path d="M6 3l14 9-14 9V3z" />
            </svg>
            <span className="text-left leading-tight">
              <span className="block text-[11px]">Get it on</span>
              <span className="block text-lg font-semibold">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
