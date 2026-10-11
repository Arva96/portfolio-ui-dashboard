import { transactions } from "../data/transactions.js";
import StatCard from "../components/StatCard";


const paidTransactions = transactions.filter(
  (tx) => tx.status === "Paid"
);

const totalRevenue = paidTransactions.reduce((total, tx) => {
  return tx.amount + total;
}, 0);

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <StatCard
  title="Total Revenue"
  value={totalRevenue}
/>

<StatCard
  title="Paid Transactions"
  value={paidTransactions.length}
/>
<StatCard
  title="Transactions"
  value={transactions.length}
/>
</div>

  );
}
