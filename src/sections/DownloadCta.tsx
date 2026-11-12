import PillButton from '../components/PillButton'
import Reveal from '../components/Reveal'

const storeButton = 'min-w-52 justify-start gap-3 px-6'

export default function DownloadCta() {
  return (
    <section
      id="download"
      className="mt-8 rounded-tl-[120px] rounded-tr-[40px] bg-cyber-yellow text-black"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <Reveal>
          <h2 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
            Take control of your money today
          </h2>
          <p className="mt-6 max-w-md text-xl font-medium opacity-80">
            Download Pocketly for free and see your full financial picture in minutes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PillButton href="#" surface="yellow" className={storeButton}>
              <svg viewBox="0 0 24 24" className="size-7 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M12 3a4 4 0 0 0-4 4v1H7a3 3 0 0 0-3 3v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6a3 3 0 0 0-3-3h-1V7a4 4 0 0 0-4-4z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-medium">Download on the</span>
                <span className="block text-lg">App Store</span>
              </span>
            </PillButton>
            <PillButton href="#" surface="yellow" className={storeButton}>
              <svg viewBox="0 0 24 24" className="size-7 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M6 3l14 9-14 9V3z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-medium">Get it on</span>
                <span className="block text-lg">Google Play</span>
              </span>
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
