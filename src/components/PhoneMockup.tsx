const spending = [
  { day: 'Mon', value: 42 },
  { day: 'Tue', value: 68 },
  { day: 'Wed', value: 35 },
  { day: 'Thu', value: 90 },
  { day: 'Fri', value: 55 },
  { day: 'Sat', value: 76 },
  { day: 'Sun', value: 48 },
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
      aria-label="Pocketly app screen showing a balance of $4,826.40, a weekly spending chart, and three recent transactions"
      className="relative mx-auto w-65 rounded-[2.5rem] border-8 border-ink bg-ink shadow-xl sm:w-72"
    >
      <div aria-hidden="true" className="overflow-hidden rounded-4xl bg-surface">
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-ink/80" />

        <div className="space-y-4 p-4 pt-3">
          <div className="rounded-card bg-brand-600 p-4 text-white">
            <p className="text-xs text-brand-100">Total balance</p>
            <p className="mt-1 text-2xl font-extrabold">$4,826.40</p>
            <p className="mt-2 text-xs text-brand-100">+$310.00 saved this month</p>
          </div>

          <div className="rounded-card border border-line bg-white p-3">
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-semibold">Spending this week</p>
              <p className="text-xs text-muted">$418</p>
            </div>
            <div className="mt-3 flex h-20 items-end gap-1.5">
              {spending.map((d) => (
                <div key={d.day} className="flex h-full flex-1 flex-col items-center gap-1">
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-sm bg-brand-500"
                      style={{ height: `${d.value}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-muted">{d.day[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold">Recent transactions</p>
            <ul className="space-y-2">
              {transactions.map((t) => (
                <li
                  key={t.name}
                  className="flex items-center justify-between rounded-control bg-white px-3 py-2"
                >
                  <div>
                    <p className="text-xs font-semibold">{t.name}</p>
                    <p className="text-[10px] text-muted">{t.category}</p>
                  </div>
                  <p
                    className={`text-xs font-semibold ${t.income ? 'text-brand-600' : 'text-ink'}`}
                  >
                    {t.amount}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
