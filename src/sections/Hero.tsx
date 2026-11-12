import Badge from '../components/Badge'
import Label from '../components/Label'
import PhoneMockup from '../components/PhoneMockup'
import PillButton from '../components/PillButton'

const starIcon = (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
  </svg>
)

const lockIcon = (
  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="3" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mb-10 overflow-x-clip rounded-br-[120px] rounded-bl-[40px] bg-cyber-yellow text-black lg:mb-28"
    >
      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-12 sm:px-6 lg:pt-10 lg:pb-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
          <div>
            <Label className="opacity-70">Personal finance app</Label>
            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              See where
              <br />
              your money
              <br />
              goes.
            </h1>
            <p className="mt-6 max-w-md text-xl lg:mt-4 font-medium opacity-80">
              Pocketly tracks your spending, sets budgets, and grows your savings, all in one app.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-6">
              <PillButton href="#download" surface="yellow">
                Download the app
              </PillButton>
              <PillButton href="#how-it-works" variant="outline" surface="yellow">
                See how it works
              </PillButton>
            </div>
          </div>

          <div className="lg:-my-14 lg:translate-y-24">
            <PhoneMockup />
          </div>
        </div>

        <div className="mt-12 flex translate-y-1/2 flex-wrap gap-3 lg:absolute lg:bottom-0 lg:left-6 lg:mt-0">
          <span className="rounded-full bg-black">
            <Badge icon={starIcon}>4.8 rating on app stores</Badge>
          </span>
          <span className="rounded-full bg-black">
            <Badge icon={lockIcon}>Bank-level encryption</Badge>
          </span>
        </div>
      </div>
    </section>
  )
}
