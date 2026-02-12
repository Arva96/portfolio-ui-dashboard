export default function FiltersBar({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
  typeFilter,
  onTypeChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="flex-1 min-w-[220px]">
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search name or email..."
          className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-200 ring-1 ring-white/10 outline-none placeholder:text-gray-500"
        />
      </div>

      {/* Status dropdown */}
      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-200 ring-1 ring-white/10 outline-none"
      >
        <option value="All" className="bg-gray-900">All statuses</option>
        <option value="Paid" className="bg-gray-900">Paid</option>
        <option value="Pending" className="bg-gray-900">Pending</option>
        <option value="Failed" className="bg-gray-900">Failed</option>
        <option value="Unknown" className="bg-gray-900">Unknown</option>
      </select>

      {/* Type dropdown */}
      <select
        value={typeFilter}
        onChange={(e) => onTypeChange(e.target.value)}
        className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-200 ring-1 ring-white/10 outline-none"
      >
        <option value="All" className="bg-gray-900">All types</option>
        <option value="Subscription" className="bg-gray-900">Subscription</option>
        <option value="One-time" className="bg-gray-900">One-time</option>
      </select>
    </div>
  );
}
