import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen border-r border-gray-200 p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-gray-800 mb-10">
        Inventory
      </h1>

      {/* Menu */}
      <nav className="space-y-2">
        <SidebarItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
        />

        {/* ACTIVE ITEM */}
        <SidebarItem
          icon={<Package size={18} />}
          label="Inventory"
          active
        />

        <SidebarItem
          icon={<ShoppingCart size={18} />}
          label="Billing"
        />

        <SidebarItem
          icon={<Users size={18} />}
          label="Supplier"
        />

        <SidebarItem
          icon={<Settings size={18} />}
          label="Loss Prevention"
        />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
        ${
          active
            ? "bg-[#2AEE5B] text-gray-900 font-semibold"
            : "text-gray-600 hover:bg-gray-50"
        }`}
    >
      <span className="flex items-center">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
