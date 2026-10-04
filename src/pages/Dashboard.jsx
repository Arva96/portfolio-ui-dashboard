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
    <div>
    <StatCard
  title="Total Revenue"
  value={totalRevenue}
/>

<StatCard
  title="Paid Transactions"
  value={paidTransactions.length}
/>
</div>

  );
}
