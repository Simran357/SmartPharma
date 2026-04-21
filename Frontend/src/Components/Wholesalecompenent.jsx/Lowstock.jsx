import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import avocado from "./Pic/OrganicHassAvocados.jpg";
import BoltIcon from '@mui/icons-material/Bolt';
import { useLocation } from 'react-router-dom';
const Lowstock = () => {
   const location = useLocation();
const [activeCategory, setActiveCategory] = React.useState("All Items");
// correct fallback safety
const lowStockItems = location?.state?.lowStockItems || [];
const orders = location?.state?.orders || [];
const filteredItems =
  activeCategory === "All Items"
    ? lowStockItems
    : lowStockItems.filter(
        item => (item.category || "Pharma") === activeCategory
      );
// flatten order items into history rows
const categories = React.useMemo(() => {
  const cats = lowStockItems.map(i => i.category || "Pharma");
  return ["All Items", ...new Set(cats)];
}, [lowStockItems]);


const historyData = orders.flatMap(order =>
  (order?.items || []).map(item => ({
    orderId: order.orderId,
    itemName: item.name,
    category: "Pharma",
    qty: item.quantity,
    date: order.createdAt,
    status: order.status,
  }))
);
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* /-- Main Dashboard Container - / */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
                {/* <!-- Dashboard Header: Title and Primary Action --> */}
                <div className='flex flex-col md:flex-row  md:items-center justify-between gap-6 mb-8'>
                    <div>
                        <h1 className='text-3xl font-bold text-slate-900  mb-2'>Low Stock Inventory Alerts</h1>
                        <p className="text-slate-500 ">Manage items that are below your threshold and replenish
                            quickly.</p>
                    </div>
                    <div>
                        <div className='flex items-center text-white gap-4'>
                            <button className="inline-flex items-center px-5 py-2.5  text-sm md:px-5 md:py-2.5 md:text-base
                                bg-blue-700 hover:bg-blue-700  font-semibold rounded-lg shadow-sm transition-all active:scale-95">
                                <AddCircleIcon className="mr-2 " />
                                New Order
                            </button>

                        </div>
                    </div>
                </div>
             <div className='flex flex-wrap gap-2 mb-8'>
  {categories.map((cat, i) => (
    <button
      key={i}
      onClick={() => setActiveCategory(cat)}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors
        ${activeCategory === cat
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
        }`}
    >
      {cat}
    </button>
  ))}
</div>
                {/* Summary Cards: Low Stock Stats and Toggle Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

                    {filteredItems?.map((item, i) => (
                        <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">

                            <h3 className="font-bold text-lg text-slate-900">
                                {item?.name}
                            </h3>

                            <p className="text-xs text-slate-500 mb-4">
                                Product ID: {item?.productId}
                            </p>

                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-slate-500">Stock</span>
                                <span className="font-bold text-orange-600">
                                    {item?.stock} Units
                                </span>
                            </div>

                            <div className="w-full bg-slate-100 h-2 rounded-full mb-6">
                                <div
                                    className="bg-orange-500 h-2 rounded-full"
                                    style={{
                                        width: `${Math.min(100, (item.totalSold / (item.totalSold + item.stock)) * 100)}%`
                                    }} />
                            </div>

                            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">
                                ⚡ Replenish
                            </button>

                        </div>
                    ))}

                </div>



                <div className='bg-white  border border-slate-200  rounded-xl shadow-sm overflow-hidden '>
                    <div className=' flex justify-between items-center px-6 py-5'>
                        <h2 className='font-bold text-slate-900 text-lg'>Replenishment History</h2>
                        <a className='text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors'>View Hostory</a>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 ">
                                <tr>
                                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Item
                                        Name</th>
                                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Category
                                    </th>
                                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                       Ordered Qty</th>
                                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Order ID
                                    </th>
                                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Date
                                    </th>
                                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData?.length > 0 ? (
                                    historyData.map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">

                                            <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                                                {row?.itemName}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-slate-500">
                                                {row?.category}
                                            </td>

                                            <td className="px-6 py-4 text-sm font-medium text-slate-900">
                                              {row?.qty}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-slate-500">
                                                #{row?.orderId}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-slate-500">
                                                {new Date(row?.date).toLocaleDateString()}
                                            </td>

                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider
            ${row.status === "Paid"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                    }`}>
                                                    {row?.status}
                                                </span>
                                            </td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-6 text-slate-400">
                                            No history available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main >
        </div>
    )
}

export default Lowstock
