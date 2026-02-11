import React from 'react'

const WholeSaler = () => {
  return (
    <div className="flex">

      <main className="flex-1 flex flex-col bg-gray-50 overflow-x-hidden">
        {/* Top header / navbar */}
        <header className="hidden sm:flex sm:h-16  border-b border-gray-200 bg-white sticky top-0 z-10 px-4 sm:px-8 py-3 flex-col sm:flex-row  items-start sm:items-center gap-4">
          {/* Dashboard title (left side) */}
          <h2 className="text-lg font-bold">Wholesaler Home Dashboard</h2>
          {/* Center section: search bar wrapper */}
          <div className="flex  items-center gap-6 flex-1 justify-center max-w-xl px-8">
            {/* Search input container (relative for icon positioning) */}
            <div className="relative w-full">
              {/* Search icon inside input */}
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                search
              </span>  
              {/* Search input field */}
              <input
                className="w-full bg-[#f1f3f5] border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search medicines, orders, or batch number..."
                type="text"
              />
            </div>
          </div>
          {/* Right section: notifications + warehouse status */}
          <div className="flex items-center gap-4">
            {/* Notification button */}
            <button className="relative p-2 text-text-muted hover:bg-gray-100 rounded-full">
              {/* Notification bell icon */}
              <span className="material-symbols-outlined">notifications</span>
              {/* Notification red dot indicator */}
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            {/* Vertical divider line */}
            <div className="h-8 w-px bg-border-subtle mx-2" />
            {/* Warehouse status text */}
            <div className="text-right">
              {/* Warehouse name */}
              <p className="text-xs font-bold">Main Warehouse</p>
              {/* Online status */}
              <p className="text-[10px] text-green-500 font-medium flex items-center justify-end gap-1">
                {/* Green status dot */}
                <span className="size-1.5 bg-green-500 rounded-full" />
                Online
              </p>
            </div>
          </div>
        </header>
        <div className="p-2 sm:p-4 lg:p-6 flex flex-col lg:flex-row gap-2 lg:gap-4">
          {/* Main content area (takes remaining space, vertical layout) */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Top stats cards section (3 columns grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gp-4">
              {/* Card 1: Total Spending */}
              <div className="bg-white border border-gray-300 p-5 rounded-lg">
                {/* Card header: title + icon */}
                <div className="flex justify-between items-start mb-4">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    Total Spending
                  </p>
                  <span className="material-symbols-outlined text-blue-400">
                    payments
                  </span>
                </div>
                {/* Main value */}
                <p className="text-2xl font-bold">$12,450.00</p>
                {/* Comparison text */}
                <p className="text-[11px] text-green-500 font-bold mt-1">
                  +12.5% vs yesterday
                </p>
              </div>
              {/* Card 2: Pending Orders */}
              <div className="bg-white border  border-gray-300 p-5 rounded-lg">
                {/* Card header */}
                <div className="flex justify-between items-start mb-4">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    Pending Orders
                  </p>
                  <span className="material-symbols-outlined text-orange-400">
                    pending_actions
                  </span>
                </div>
                {/* Main value */}
                <p className="text-2xl font-bold">48</p>
                {/* Status info */}
                <p className="text-[11px] text-red-500 font-bold mt-1">
                  -5% fulfillment rate
                </p>
              </div>
              {/* Card 3: Low Stock */}
              <div className="bg-white border  border-gray-300 p-5 rounded-lg">
                {/* Card header */}
                <div className="flex justify-between items-start mb-4">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    Low Stock
                  </p>
                  <span className="material-symbols-outlined text-red-500">
                    warning
                  </span>
                </div>
                {/* Main value */}
                <p className="text-2xl font-bold">12 Items</p>
                {/* Info text */}
                <p className="text-[11px] text-gray-500 mt-1">
                  High Priority Restock
                </p>
              </div>
            </div>
            {/* Quick actions section */}
            <div>
              {/* Section title */}
              <h3 className="text-sm font-bold mb-4">Quick Actions</h3>
              {/* Quick action buttons grid (4 columns) */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {/* Action 1: Search Medicine */}
                <button className="bg-white border border-gray-500 p-6 rounded-lg hover:shadow-sm transition-all flex flex-col items-center text-center gap-3">
                  {/* Icon circle */}
                  <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  {/* Action text */}
                  <div>
                    <p className="text-xs font-bold">Search Medicine</p>
                    <p className="text-[12px] text-gray-500 mt-1">
                      Browse catalog
                    </p>
                  </div>
                </button>
                {/* Action 2: Chat with AI */}
                <button className="bg-white border border-gray-500 p-6 rounded-lg hover:shadow-sm transition-all flex flex-col items-center text-center gap-3">
                  <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">smart_toy</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Chat with AI</p>
                    <p className="text-[12px] text-gray-500 mt-1">
                      Smart assistance
                    </p>
                  </div>
                </button>
                {/* Action 3: My Bills */}
                <button className="bg-white border border-gray-500 p-6 rounded-lg hover:shadow-sm transition-all flex flex-col items-center text-center gap-3">
                  <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">receipt_long</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">My Bills</p>
                    <p className="text-[12px] text-gray-500 mt-1">
                      Payment history
                    </p>
                  </div>
                </button>
                {/* Action 4: Order Status */}
                <button className="bg-white border border-gray-500 p-6 rounded-lg hover:shadow-sm transition-all flex flex-col items-center text-center gap-3">
                  <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">
                      local_shipping
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Order Status</p>
                    <p className="text-[12px] text-gray-500 mt-1">
                      Track shipments
                    </p>
                  </div>
                </button>
              </div>
            </div>
            {/* Recent orders table card */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Table header */}
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-sm">Recent Orders</h3>
                <a
                  className="text-blue-500 text-xs  hover:underline"
                  href="#"
                >
                  View All Orders
                </a>
              </div>
              {/* Table scroll wrapper */}
              <div className="overflow-hidden">
                {/* Orders table */}
                <table className="w-full text-left">
                  {/* Table headings */}
                  <thead className="bg-gray-50 text-gray-500 text-[10px] uppercase font-bold tracking-wider border-b border-border-subtle">
                    <tr>
                      <th className="px-4 py-3">Order ID</th>
                      <th className="px-4 py-3">Distributor</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  {/* Table body */}
                  <tbody className="text-xs divide-y divide-border-subtle">
                    {/* Order row 1 */}
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-bold text-gray-500">
                        #ORD-9024
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-bold">City Care Pharma</p>
                        <p className="text-[10px] text-text-muted">Nagpur, MH</p>
                      </td>
                      <td className="px-4 py-4 font-bold">$1,240.00</td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold border border-orange-100">
                          ● Pending
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase">
                          Track
                        </button>
                      </td>
                    </tr>
                    {/* Order row 2 */}
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-bold text-gray-500">
                        #ORD-9023
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-bold">HealthLine Meds</p>
                        <p className="text-[10px] text-text-muted">Pune, MH</p>
                      </td>
                      <td className="px-4 py-4 font-bold">$850.50</td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold border border-green-100">
                          ● Packed
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        {/* Action icons */}
                        <div className="flex justify-end gap-2">
                          <span className="material-symbols-outlined text-gray-500 cursor-pointer text-[18px]">
                            print
                          </span>
                          <span className="material-symbols-outlined text-gray-500 cursor-pointer text-[18px]">
                            arrow_forward
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Right sidebar container (fixed width, vertical layout) */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            {/* Card 1: Expiring Stock */}
            <div className="bg-white border border-gray-200 rounded-lg">
              {/* Card header: title + alert count */}
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                {/* Header left: icon + title */}
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-500 text-[18px]">
                    hourglass_empty
                  </span>
                  <h3 className="text-sm font-bold">Expiring Stock</h3>
                </div>
                {/* Alert count badge */}
                <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded border border-red-100">
                  12 ALERTS
                </span>
              </div>
              {/* Card body: list of expiring items */}
              <div className="p-4 flex flex-col gap-4">
                {/* Expiring item (high priority / red alert) */}
                <div className="p-3 border border-red-100 bg-red-50/30 rounded-lg flex items-start gap-3">
                  {/* Medicine icon */}
                  <div className="size-8 bg-white border border-red-100 rounded flex items-center justify-center text-red-500">
                    <span className="material-symbols-outlined text-[16px]">
                      pill
                    </span>
                  </div>
                  {/* Medicine details */}
                  <div className="flex-1">
                    <p className="text-[11px] font-bold">Amoxicillin 500mg</p>
                    {/* Batch + expiry info */}
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[9px] text-text-muted">
                        Batch: AMX-2201
                      </span>
                      <span className="text-[9px] text-red-600 font-bold">
                        Exp: 12 Oct
                      </span>
                    </div>
                  </div>
                </div>
                {/* Expiring item (medium priority) */}
                <div className="p-3 border border-gray-200 rounded-lg flex items-start gap-3">
                  {/* Medicine icon */}
                  <div className="size-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-gray-500">
                    <span className="material-symbols-outlined text-[16px]">
                      medication
                    </span>
                  </div>
                  {/* Medicine details */}
                  <div className="flex-1 bg-gray-50">
                    <p className="text-[11px] font-bold">Cough Syrup (Z-Type)</p>
                    {/* Batch + expiry info */}
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[9px] text-gray-500">
                        Batch: CS-789
                      </span>
                      <span className="text-[9px] text-orange-600 font-bold">
                        Exp: 28 Oct
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card footer: manage expiry list button */}
              <div className="p-3 border-t border-gray-200 text-center">
                <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-primary">
                  Manage Expiry List
                </button>
              </div>
            </div>
            {/* Card 2: Urgent Notifications */}
            <div className="bg-white border border-gray-200 rounded-lg">
              {/* Card header */}
              <div className="px-5 py-4 border-b border-gray-200">
                <h3 className="text-sm font-bold">Urgent Notifications</h3>
              </div>
              {/* Notifications list */}
              <div className="p-4 flex flex-col gap-4">
                {/* Notification item 1 */}
                <div className="flex gap-3">
                  {/* Sender initials avatar */}
                  <div className="size-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink">
                    <span className="text-[10px] font-bold">JP</span>
                  </div>
                  {/* Notification text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">Janata Pharma</p>
                    <p className="text-[10px] text-gray-500">
                      New Registration Request
                    </p>
                  </div>
                  {/* Approval icon */}
                  <span className="material-symbols-outlined text-green-500 text-[18px]">
                    check_circle
                  </span>
                </div>
                {/* Notification item 2 */}
                <div className="flex gap-3">
                  {/* Sender initials avatar */}
                  <div className="size-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink">
                    <span className="text-[10px] font-bold">SM</span>
                  </div>
                  {/* Notification text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">Star Meds Co.</p>
                    <p className="text-[10px] text-gray-500">
                      Credit Limit Increase
                    </p>
                  </div>
                  {/* Approval icon */}
                  <span className="material-symbols-outlined text-green-500 text-[18px]">
                    check_circle
                  </span>
                </div>
              </div>
              {/* Info banner at bottom */}
              <div className="m-4 p-3 bg-blue-50/50 border border-blue-100 rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-500 text-[18px]">
                  info
                </span>
                <p className="text-[10px] text-blue-500 font-medium">
                  3 more requests need your verification today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  )


}

export default WholeSaler