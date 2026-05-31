import {
  LayoutDashboard,
  Search,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";

type SidebarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

export default function Sidebar({
  activePage,
  setActivePage,
}: SidebarProps) {
  return (
    <aside className="w-64 bg-[#111827] min-h-screen p-6 border-r border-gray-800">
      <h1 className="text-2xl font-bold text-orange-500 mb-10">
        helium-clone
      </h1>

      <nav className="space-y-3">
        <button
          onClick={() => setActivePage("dashboard")}
          className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl transition ${
            activePage === "dashboard"
              ? "bg-orange-500 text-white"
              : "text-gray-400 hover:bg-gray-800"
          }`}
        >
          <LayoutDashboard size={20} className="shrink-0" />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => setActivePage("research")}
          className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl transition ${
            activePage === "research"
              ? "bg-orange-500 text-white"
              : "text-gray-400 hover:bg-gray-800"
          }`}
        >
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
