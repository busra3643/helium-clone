import {
  LayoutDashboard,
  Search,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] min-h-screen p-6 border-r border-gray-800">
      <h1 className="text-2xl font-bold text-orange-500 mb-10">
        helium-clone
      </h1>

      <nav className="space-y-3">
        <button className="flex items-center gap-4 bg-orange-500 text-white w-full px-4 py-3 rounded-xl font-medium">
          <LayoutDashboard size={20} className="shrink-0" />
          <span>Dashboard</span>
        </button>

        <button className="flex items-center gap-4 text-gray-400 hover:bg-gray-800 w-full px-4 py-3 rounded-xl transition">
          <Search size={20} className="shrink-0" />
          <span>Product Research</span>
        </button>

        <button className="flex items-center gap-4 text-gray-400 hover:bg-gray-800 w-full px-4 py-3 rounded-xl transition">
          <BarChart3 size={20} className="shrink-0" />
          <span>Keyword Tracker</span>
        </button>

        <button className="flex items-center gap-4 text-gray-400 hover:bg-gray-800 w-full px-4 py-3 rounded-xl transition">
          <Users size={20} className="shrink-0" />
          <span>Competitors</span>
        </button>

        <button className="flex items-center gap-4 text-gray-400 hover:bg-gray-800 w-full px-4 py-3 rounded-xl transition">
          <Settings size={20} className="shrink-0" />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
}