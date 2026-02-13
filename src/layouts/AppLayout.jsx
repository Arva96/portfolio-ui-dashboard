import { NavLink, Outlet } from "react-router-dom";

const linkBase =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm ring-1 ring-transparent transition";

const linkInactive = "text-gray-300 hover:bg-white/5 hover:text-white";
const linkActive = "bg-white/10 text-white ring-white/10";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="px-3 py-2">
              <div className="text-sm font-semibold">Portfolio UI</div>
              <div className="text-xs text-gray-400">Admin Dashboard</div>
            </div>

            <nav className="mt-3 space-y-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                Transactions
              </NavLink>

              <NavLink
                to="/users"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                Users
              </NavLink>

              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                Settings
              </NavLink>
            </nav>
          </aside>

          {/* Main */}
          <main className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
