import { useEffect, useState } from "react";
import FiltersBar from "../components/filters/FiltersBar";
import TransactionsTable from "../components/transactions/TransactionsTable";
import { getFilteredTransactions } from "../helpers/getFilteredTransactions";
import { transactions as mockTransactions } from "../data/transactions.js";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    const id = setTimeout(() => {
    setTransactions(mockTransactions)
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
          <p className="mt-1 text-sm text-gray-400">Showing {filteredTransactions.length} transactions</p>
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
