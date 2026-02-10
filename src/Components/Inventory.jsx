import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";
import InventoryTable from "./InventoryTable";

export default function Inventory() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* LEFT SIDEBAR — stays fixed */}
      <Sidebar />

      {/* RIGHT SECTION */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* TOPBAR — stays fixed */}
        <Topbar />

        {/* SCROLLABLE CONTENT */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard title="At Risk" value="24 Items" subtitle="+5% last week" />
            <StatCard title="Dead Stock" value="$1,450" subtitle="12 SKUs" />
            <StatCard title="Efficiency" value="92.4%" subtitle="Healthy" />
          </div>

          <InventoryTable />
        </main>

      </div>
    </div>
  );
}
