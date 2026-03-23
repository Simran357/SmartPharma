export default function InventoryTable() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">

      {/* Tabs */}
      <div className="flex gap-8 border-b mb-6 text-sm font-medium">
        <button className="pb-3 border-b-2 border-green-500 text-green-600">
          All Inventory
        </button>
        <button className="pb-3 text-gray-500">Expiring Soon</button>
        <button className="pb-3 text-gray-500">Overstocked</button>
        <button className="pb-3 text-gray-500">Dead Stock</button>
      </div>

      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1.2fr_1.6fr_1fr_40px] text-xs uppercase text-gray-400 mb-4">
        <span>Product & SKU</span>
        <span>Category</span>
        <span>Stock Level</span>
        <span>Expiry Timeline</span>
        <span>Status</span>
        <span></span>
      </div>

      {/* ROW 1 — Amoxicillin */}
      <div className="grid grid-cols-[2fr_1fr_1.2fr_1.6fr_1fr_40px] items-center py-4 border-t">
        <div>
          <p className="font-semibold">Amoxicillin 500mg</p>
          <p className="text-xs text-gray-500">SKU: AMX-500-CP</p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-700 w-fit">
          Antibiotics
        </span>

        <div>
          <p className="font-semibold">1,240 Units</p>
          <span className="text-xs px-2 py-1 rounded bg-orange-50 text-orange-700">
            Overstock (1.5x)
          </span>
        </div>

        <div>
          <div className="h-2 rounded-full bg-gray-200 mb-1 w-44">
            <div className="h-full w-1/4 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-xs text-red-500">Exp: 18 Days</p>
          <p className="text-xs text-gray-400">12 Months left</p>
        </div>

        <div className="flex items-center gap-2 text-red-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
          High Risk
        </div>

        <button className="text-xl text-gray-400">⋮</button>
      </div>

      {/* Risk Management Section */}
      <div className="grid grid-cols-3 gap-6 bg-gray-50 p-4 rounded-lg mt-2">
        <div className="col-span-2">
          <p className="text-sm font-semibold mb-2">Batch Breakdown</p>
          <p className="text-sm">
            #BCH-9923 (Aisle 4B)
            <span className="text-red-500 ml-2">
              240 units · Exp: Oct 24, 2024
            </span>
          </p>
          <p className="text-sm text-gray-500">
            #BCH-1045 (Aisle 4B)
            <span className="ml-2">
              1,000 units · Exp: Jan 12, 2026
            </span>
          </p>
        </div>

        <div className="border-l pl-4">
          <p className="text-sm font-semibold mb-2">Risk Assessment</p>
          <p className="text-sm text-gray-600 mb-3">
            Current burn rate is 200 units/mo. High probability of loss for batch
            #9923.
          </p>
          <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg">
            Mark for Return
          </button>
        </div>
      </div>

      {/* ROW 2 — Lisinopril */}
      <div className="grid grid-cols-[2fr_1fr_1.2fr_1.6fr_1fr_40px] items-center py-4 border-t mt-4">
        <div>
          <p className="font-semibold">Lisinopril 10mg</p>
          <p className="text-xs text-gray-500">SKU: LIS-10-TAB</p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 w-fit">
          Hypertension
        </span>

        <div>
          <p className="font-semibold">45 Units</p>
          <span className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-700">
            Dead Stock (90d+)
          </span>
        </div>

        <div>
          <div className="h-2 rounded-full bg-gray-200 mb-1 w-44">
            <div className="h-full w-2/3 bg-orange-400 rounded-full"></div>
          </div>
          <p className="text-xs text-orange-500">Exp: 84 Days</p>
          <p className="text-xs text-gray-400">18 Months left</p>
        </div>

        <div className="flex items-center gap-2 text-orange-500 font-medium">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          Monitor
        </div>

        <button className="text-xl text-gray-400">⋮</button>
      </div>

      {/* ROW 3 — Paracetamol */}
      <div className="grid grid-cols-[2fr_1fr_1.2fr_1.6fr_1fr_40px] items-center py-4 border-t">
        <div>
          <p className="font-semibold">Paracetamol 500mg</p>
          <p className="text-xs text-gray-500">SKU: PCM-500-GEN</p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-700 w-fit">
          Analgesics
        </span>

        <div>
          <p className="font-semibold">5,000 Units</p>
          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
            Optimal
          </span>
        </div>

        <div>
          <div className="h-2 rounded-full bg-gray-200 mb-1 w-44">
            <div className="h-full w-full bg-green-500 rounded-full"></div>
          </div>
          <p className="text-xs text-green-600">Exp: 2.4 Years</p>
          <p className="text-xs text-gray-400">Healthy</p>
        </div>

        <div className="flex items-center gap-2 text-green-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-green-600"></span>
          Stable
        </div>

        <button className="text-xl text-gray-400">⋮</button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <span>Showing 1–10 of 482 products</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 border rounded">‹</button>
          <button className="px-3 py-1 rounded bg-green-500 text-white">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>

    </div>
  )
}
