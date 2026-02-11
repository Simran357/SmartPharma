import React from 'react'

const Orders = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex">

      <aside className="w-64 bg-white dark:bg-sidebar-dark border-r border-slate-200 dark:border-slate-800 flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-6 flex mt-10 items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
            <span className="material-icons-outlined">hub</span>
          </div>
          <div> 
            <h1 className="font-bold text-sm leading-tight">Wholesale Hub</h1>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
              Admin Dashboard
            </p>
          </div> 
        </div>
        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar">
          <a
            className="flex items-center gap-3 px-4 py-3 text-primary bg-blue-50 dark:bg-blue-900/20 rounded-xl font-semibold"
            href="#"
          >
            <span className="material-icons-outlined text-[20px]">
              shopping_cart
            </span>
            <span className="text-sm">Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
            href="#"
          >
            <span className="material-icons-outlined text-[20px]">inventory_2</span>
            <span className="text-sm">Inventory</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
            href="#"
          >
            <span className="material-icons-outlined text-[20px]">storefront</span>
            <span className="text-sm">Retailers</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
            href="#"
          >
            <span className="material-icons-outlined text-[20px]">insights</span>
            <span className="text-sm">Analytics</span>
          </a>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl cursor-pointer transition-colors group">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold overflow-hidden">
              <img
                alt="Alex Rivera Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1QcX5YU7L8jxPcRPMJI7rslk_S4aAcz9E63yQkOUrYETEh92XBbLiMV-CAvmluSZHHlCcLncSQb77uU5n_jaspy2UEVpc0Ca3oxZv_PbOtpsI2U0RXfY1CUPrEkFwSbojOcWX8mj2ACAC7V4zUFmdAz45I4DUm6dZ0BowMToxayqpWEf1YTp-zak7Ic3lb1rnakNYrfi-oksDtWPizSN8U5jhvq8j_dtJiE6o_8CuaEGCQAZJ3lnM7oXdi16X45tcZbMnon5I0wKL"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold truncate">Alex Rivera</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Fulfillment Manager
              </p>
            </div>
            <span className="material-icons-outlined text-slate-400 group-hover:text-slate-600 transition-colors">
              more_vert
            </span>
          </div>
        </div>
      </aside>
      <main className="ml-64 flex-1 flex flex-col">
        <header className="h-20 px-8 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-40">
          <div>
            <h2 className="text-xl font-bold">Fulfillment Dashboard</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-96">
              <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none placeholder-slate-400"
                placeholder="Search orders, retailers, or SKUs..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <span className="material-icons-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full" />
              </button>
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <span className="material-icons-outlined">settings</span>
              </button>
              <button
                className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                onclick="document.documentElement.classList.toggle('dark')"
              >
                <span className="material-icons-outlined">dark_mode</span>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-sm transition-all active:scale-95">
                <span className="material-icons-outlined text-sm">add</span>
                Create Manual Order
              </button>
            </div>
          </div>
        </header>
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-500">
                  <span className="material-icons-outlined">inventory</span>
                </div>
                <span className="text-[11px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">
                  High Priority
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Orders to Pack
              </p>
              <h3 className="text-3xl font-bold mt-1">24</h3>
              <p className="text-xs text-slate-400 mt-2">
                8 requiring expedited shipping
              </p>
            </div>
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary">
                  <span className="material-icons-outlined">local_shipping</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Pending Shipments
              </p>
              <h3 className="text-3xl font-bold mt-1">12</h3>
              <p className="text-xs text-slate-400 mt-2">
                Ready for carrier pickup
              </p>
            </div>
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-500">
                  <span className="material-icons-outlined">add_shopping_cart</span>
                </div>
                <span className="text-[11px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                  +3 New
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                New Orders
              </p>
              <h3 className="text-3xl font-bold mt-1">8</h3>
              <p className="text-xs text-slate-400 mt-2">
                Received in the last 4 hours
              </p>
            </div>
          </div>
          <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-lg">Recent Orders</h3>
              <div className="flex items-center gap-4">
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                  <button className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-slate-700 rounded shadow-sm">
                    All Statuses
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                    Unfulfilled
                  </button>
                </div>
                <button className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-primary flex items-center gap-1">
                  <span className="material-icons-outlined text-sm">
                    file_download
                  </span>
                  Export CSV
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Retailer Name</th>
                    <th className="px-6 py-4">Order Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Total Value</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-primary hover:underline cursor-pointer">
                        #ORD-7732
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      Urban Goods Co.
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 12, 2023, 09:45 AM
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 uppercase">
                        Processing
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$2,450.00</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-sm font-semibold text-primary hover:text-blue-700 transition-colors">
                        Start Packing
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-primary hover:underline cursor-pointer">
                        #ORD-7731
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      City Retailers
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 12, 2023, 08:30 AM
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 uppercase">
                        Packing
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$1,120.00</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-sm font-semibold text-primary hover:text-blue-700 transition-colors">
                        Print Label
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-primary hover:underline cursor-pointer">
                        #ORD-7730
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Metro Mart</td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 11, 2023, 04:15 PM
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 uppercase">
                        Shipped
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$3,890.00</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-primary hover:underline cursor-pointer">
                        #ORD-7729
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      Boutique Finds
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 11, 2023, 11:20 AM
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 uppercase">
                        Processing
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$850.00</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-sm font-semibold text-primary hover:text-blue-700 transition-colors">
                        Start Packing
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-primary hover:underline cursor-pointer">
                        #ORD-7728
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Global Supply</td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 10, 2023, 02:50 PM
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 uppercase">
                        Shipped
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$12,400.00</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Showing 1 to 5 of 248 orders
              </p>
              <div className="flex items-center gap-2">
                <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-icons-outlined text-lg">
                    chevron_left
                  </span>
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
                  1
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors">
                  2
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors">
                  3
                </button>
                <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-icons-outlined text-lg">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Orders
