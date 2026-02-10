import { Bell, Search, Plus, Download } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b px-8 py-4">
      <div className="flex items-center justify-between">

        {/* LEFT */}
        <h1 className="text-xl font-bold text-gray-900">
          Inventory Control
        </h1>

        {/* CENTER */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[420]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search product name, SKU, or batch..."
              className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium">
            <Plus size={16} />
            Add Stock
          </button>

          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full font-medium">
            <Download size={16} />
            Export Report
          </button>

          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <Bell size={18} />
          </button>
        </div>

      </div>
    </header>
  );
}
