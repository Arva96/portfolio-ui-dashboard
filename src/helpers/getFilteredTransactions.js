export function getFilteredTransactions({
  transactions,
  statusFilter,
  typeFilter,
  search,
}) {
  return transactions
    .filter(tx => statusFilter === "All" || tx.status === statusFilter)
    .filter(tx => typeFilter === "All" || tx.type === typeFilter)
    .filter(tx => {
      if (!search.trim()) return true

      const q = search.toLowerCase()

      return (
        tx.name.toLowerCase().includes(q) ||
        tx.email.toLowerCase().includes(q)
      )
    })
}
