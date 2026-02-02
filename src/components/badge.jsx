export default function Badge({ variant = "status", value }) {
  const base =
    "inline-flex rounded-full px-2 py-1 text-xs ring-1";

  if (variant === "status") {
    const cls =
      value === "Paid"
        ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30"
        : value === "Pending"
        ? "bg-amber-500/15 text-amber-300 ring-amber-500/30"
        : value === "Failed"
        ? "bg-rose-500/15 text-rose-300 ring-rose-500/30"
        : "bg-white/10 text-gray-200 ring-white/20";

    return <span className={`${base} ${cls}`}>{value}</span>;
  }

  // variant === "type"
  const cls =
    value === "Subscription"
      ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30"
      : value === "One-time"
      ? "bg-sky-500/15 text-sky-300 ring-sky-500/30"
      : "bg-white/10 text-gray-200 ring-white/20";

  return <span className={`${base} ${cls}`}>{value}</span>;
}
