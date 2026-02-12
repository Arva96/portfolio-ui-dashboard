import Badge from "../badge";
export default function TransactionsTable({transactions, loading, statusFilter, typeFilter, search}){
return (
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

) : transactions.length === 0 ? (
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
): ( transactions.map((tx, idx) => {
   
    return (
      <tr key={idx} className="hover:bg-white/5">
        <td className="px-4 py-3 font-medium">{tx.name}</td>
        <td className="px-4 py-3 text-gray-400">{tx.email}</td>
        <td className="px-4 py-3">{tx.amount}</td>
        <td className="px-4 py-3">
          <Badge variant="status" value={tx.status} />
        </td>
        <td className="px-4 py-3 text-gray-400">{tx.date}</td>
        <td className="px-4 py-3">
          <Badge variant="type" value={tx.type} />
        </td>
      </tr>
    )
  })
)}

      </tbody>
    </table>
)
 

}