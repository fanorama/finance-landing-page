import Badge from './Badge'
import GlassCard from './GlassCard'
import Label from './Label'

const spending = [
  { day: 'M', value: 42 },
  { day: 'T', value: 68 },
  { day: 'W', value: 35 },
  { day: 'T', value: 90 },
  { day: 'F', value: 55 },
  { day: 'S', value: 76 },
  { day: 'S', value: 48 },
]

const transactions = [
  { name: 'Green Market', category: 'Groceries', amount: '-$42.30', income: false },
  { name: 'Salary', category: 'Income', amount: '+$3,200.00', income: true },
  { name: 'City Transit', category: 'Transport', amount: '-$12.50', income: false },
]

export default function PhoneMockup() {
  return (
    <div
      role="img"
      aria-label="Pocketly app card showing a balance of $4,826.40, a weekly spending chart, and three recent transactions"
      className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-5 -rotate-3 rounded-tl-[100px] rounded-tr-[40px] rounded-br-[100px] rounded-bl-[40px] bg-black"
      />

      <GlassCard float aria-hidden="true" className="relative space-y-5 p-6 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Label className="text-white/60">Total balance</Label>
            <p className="mt-1 text-4xl font-bold tracking-tight">$4,826.40</p>
          </div>
          <Badge variant="yellow" className="shrink-0 whitespace-nowrap">
            Add money
          </Badge>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <Label className="text-white/60">Spending this week</Label>
            <span className="text-sm font-medium">$418</span>
          </div>
          <div className="mt-3 flex h-24 items-end gap-2">
            {spending.map((d, i) => (
              <div key={i} className="flex h-full flex-1 flex-col items-center gap-1.5">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-full bg-cyber-yellow"
                    style={{ height: `${d.value}%` }}
                  />
                </div>
                <span className="text-[10px] text-white/60">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <ul className="space-y-2">
          {transactions.map((t) => (
            <li
              key={t.name}
              className="flex items-center justify-between rounded-full bg-white/10 px-5 py-3"
            >
              <div>
                <p className="text-sm font-medium leading-tight">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/60">{t.category}</p>
              </div>
              <p className={`text-sm font-bold ${t.income ? 'text-cyber-yellow' : 'text-white'}`}>
                {t.amount}
              </p>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  )
}
