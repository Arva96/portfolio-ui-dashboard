import { useEffect, useState } from "react"

export default function App() {
  const [transactions, setTransactions] = useState([])
const [loading, setLoading] = useState(true)
const [statusFilter, setStatusFilter] = useState("All")
const [typeFilter, setTypeFilter] = useState("All")
const [search, setSearch] = useState("");

const filteredTransactions = transactions
  .filter((tx) => statusFilter === "All" ? true : tx.status === statusFilter)
  .filter((tx) => typeFilter === "All" ? true : tx.type === typeFilter)
  .filter((tx) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;

    const name = tx.name.toLowerCase();
    const email = tx.email.toLowerCase();
    return name.includes(q) || email.includes(q);
  });

useEffect(() => {

  const id = setTimeout(() => {
    setTransactions([
      { name: "Alex Papas", email: "alex@demo.com", amount: "€129.00", status: "Paid", date: "2026-01-26", type: "Subscription"},
      { name: "Maria K.", email: "maria@demo.com", amount: "€59.00", status: "Pending", date: "2026-01-26", type: "Subscription" },
      { name: "Nikos D.", email: "nikos@demo.com", amount: "€249.00", status: "Failed", date: "2026-01-25", type: "One-time"},
      { name: "Elena S.", email: "elena@demo.com", amount: "€19.00", status: "Paid", date: "2026-01-25", type: "One-time"},
    ])
    setLoading(false)
  }, 1200)


  return () => clearTimeout(id)
}, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-64 md:flex-col border-r border-white/10 bg-gray-950">
          <div className="h-16 flex items-center px-6 border-b border-white/10">
            <span className="text-sm font-semibold tracking-wide">Insight</span>
          </div>

          <nav className="flex-1 p-3 space-y-1">
            {["Overview", "Reports", "Customers", "Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="block rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10 text-xs text-gray-400">
            Work-only dashboard UI
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Topbar */}
          <header className="h-16 flex items-center gap-3 px-4 md:px-6 border-b border-white/10 bg-gray-950/80 backdrop-blur">
            <div className="md:hidden text-sm font-semibold">Insight</div>

            <div className="flex-1">
              <div className="max-w-md">
                <input
                  placeholder="Search..."
                  className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>

            <button className="rounded-full w-9 h-9 bg-white/10 hover:bg-white/15 ring-1 ring-white/10" />
          </header>

          {/* Content */}
          <main className="p-4 md:p-6 space-y-6">
  <div>
    <h1 className="text-xl font-semibold">Overview</h1>
    <p className="mt-2 text-sm text-gray-400">
      Key metrics for the last 30 days.
    </p>
  </div>

  {/* Stat cards */}
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      { label: "Revenue", value: "€24,349", delta: "+12.4%" },
      { label: "Orders", value: "1,284", delta: "+4.1%" },
      { label: "Active users", value: "8,902", delta: "+18.9%" },
      { label: "Conversion", value: "3.42%", delta: "-0.3%" },
    ].map((item) => (
      <div
        key={item.label}
        className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/7 transition"
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm text-gray-400">{item.label}</p>
          <span className="text-xs rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1 text-gray-300">
            {item.delta}
          </span>
        </div>

        <p className="mt-3 text-2xl font-semibold tracking-tight">
          {item.value}
        </p>
        <p className="mt-1 text-xs text-gray-500">vs previous period</p>
      </div>
    ))}
  </section>
  {/* Chart */}
<section className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
  <div className="flex items-center justify-between">
    <h2 className="text-sm font-medium">Revenue (last 7 days)</h2>
    <span className="text-xs text-gray-400">€</span>
  </div>

  <div className="mt-4 h-40 flex items-end gap-2">
    {[40, 65, 30, 80, 55, 70, 45].map((value, index) => (
      <div
        key={index}
        className="flex-1 rounded-md bg-blue-500/70 hover:bg-blue-500 transition"
        style={{ height: `${value}%` }}
        title={`Day ${index + 1}: ${value}`}
      />
    ))}
  </div>

  <p className="mt-3 text-xs text-gray-400">
    Data is mocked for UI demonstration.
  </p>
</section>
{/* Transactions */}
<section className="rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
  <div className="p-4 flex items-center justify-between gap-3">
    <div>
      <h2 className="text-sm font-medium">Recent transactions</h2>
      <p className="mt-1 text-xs text-gray-400">A list of your latest payments.</p>
    </div>

    <div className="mt-3 flex flex-wrap gap-2">
       <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search name or email..."
    className="w-full sm:w-64 rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-100
               placeholder:text-gray-400 ring-1 ring-white/10 focus:outline-none
               focus:ring-2 focus:ring-sky-500/50"
  />
  {["All", "Paid", "Pending", "Failed"].map((s) => {
    const active = statusFilter === s
    return (
      <button
        key={s}
        onClick={() => setStatusFilter(s)}
        className={`text-xs rounded-lg px-3 py-2 ring-1 transition ${
          active
            ? "bg-white/10 text-white ring-white/20"
            : "bg-white/5 text-gray-300 ring-white/10 hover:bg-white/10"
        }`}
      >
        {s}
      </button>
    )
  })}
  {["All", "Subscription", "One-time"].map((t) => {
    const active = typeFilter === t
    return (
      <button
        key={t}
        onClick={() => {console.log("typeFilter ->", t); setTypeFilter(t)}}
        className={`text-xs rounded-lg px-3 py-2 ring-1 transition ${
          active
            ? "bg-white/10 text-white ring-white/20"
            : "bg-white/5 text-gray-300 ring-white/10 hover:bg-white/10"
        }`}
      >
        {t}
      </button>
    )
  })}
</div>


    <div className="flex items-center gap-2">
      <button className="text-xs rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:bg-white/10">
        Export
      </button>
      <button className="text-xs rounded-lg bg-white/10 ring-1 ring-white/10 px-3 py-2 hover:bg-white/15">
        New
      </button>
    </div>
  </div>

  <div className="border-t border-white/10 overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead className="bg-white/5 text-gray-300">
        <tr>
          <th className="text-left font-medium px-4 py-3">Customer</th>
          <th className="text-left font-medium px-4 py-3">Email</th>
          <th className="text-left font-medium px-4 py-3">Amount</th>
          <th className="text-left font-medium px-4 py-3">Status</th>
          <th className="text-left font-medium px-4 py-3">Date</th>
          <th className="text-left font-medium px-4 py-3">Type</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-white/10">
        {loading ? (
  <tr>
    <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
      Loading transactions…
    </td>
  </tr>

) : filteredTransactions.length === 0 ? (
    <tr>
    <td colSpan={6} className="px-4 py-6 text-center text-sm text-gray-400">
  No results for{" "}
  <span className="text-gray-200">{statusFilter}</span>
  {typeFilter !== "All" && (
    <>
      {" "} / <span className="text-gray-200">{typeFilter}</span>
    </>
  )}
  {search.trim() && (
    <>
      {" "} &quot;<span className="text-gray-200">{search.trim()}</span>&quot;
    </>
  )}
</td>

  </tr>
): ( filteredTransactions.map((tx, idx) => {
    const statusBadge =
      tx.status === "Paid"
        ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30"
        : tx.status === "Pending"
        ? "bg-amber-500/15 text-amber-300 ring-amber-500/30"
        : tx.status === "Failed"
        ? "bg-rose-500/15 text-rose-300 ring-rose-500/30"
        : "bg-white/10 text-gray-200 ring-white/20"

      const typeBadge =
        tx.type === "Subscription"
        ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30"
        : "bg-rose-500/15 text-rose-300 ring-rose-500/30"

    return (
      <tr key={idx} className="hover:bg-white/5">
        <td className="px-4 py-3 font-medium">{tx.name}</td>
        <td className="px-4 py-3 text-gray-400">{tx.email}</td>
        <td className="px-4 py-3">{tx.amount}</td>
        <td className="px-4 py-3">
          <span className={`inline-flex rounded-full px-2 py-1 text-xs ring-1 ${statusBadge}`}>
            {tx.status}
          </span>
        </td>
        <td className="px-4 py-3 text-gray-400">{tx.date}</td>
        <td className="px-4 py-3">
          <span className={`inline-flex rounded-full px-2 py-1 text-xs ring-1 ${typeBadge}`}>
            {tx.type}
          </span>
        </td>
      </tr>
    )
  })
)}

      </tbody>
    </table>
  </div>
</section>


</main>

        </div>
      </div>
    </div>
  )
}
