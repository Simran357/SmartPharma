import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";
import InventoryTable from "./InventoryTable";

export default function Inventory() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="flex-1">
        <Topbar />

        <main className="p-8">
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

