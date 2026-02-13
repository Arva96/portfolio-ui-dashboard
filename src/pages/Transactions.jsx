import { useEffect, useState } from "react";
import FiltersBar from "../components/filters/FiltersBar";
import TransactionsTable from "../components/transactions/TransactionsTable";
import { getFilteredTransactions } from "../helpers/getFilteredTransactions";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

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
     

    return () => clearTimeout(id);
  }, []);

  const filteredTransactions = getFilteredTransactions({
    transactions,
    statusFilter,
    typeFilter,
    search,
  });

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-white">Transactions</h1>
          <p className="mt-1 text-sm text-gray-400">
            Search, filter, and review transactions.
          </p>
        </div>
      </div>

      <FiltersBar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
      />

      <TransactionsTable
        transactions={filteredTransactions}
        loading={loading}
        statusFilter={statusFilter}
        typeFilter={typeFilter}
        search={search}
      />
    </div>
  );
}
