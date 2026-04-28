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



const historyData = orders.flatMap(order =>
  (order?.items || []).map(item => ({
    orderId: order.orderId,
    itemName: item.name,
    category: item.category || "Pharma",
    qty: item.qty || item.quantity || 0,
    date: order.createdAt,
    status: order.status,
  }))
);
const enrichedLowStockItems = React.useMemo(() => {
  return lowStockItems.map((product) => {

    const matchedOrder = orders.find(order =>
      order.items?.some(item =>
        item?.name?.trim().toLowerCase() ===
        product?.ProductName?.trim().toLowerCase()
      )
    );

    const matchedItem = matchedOrder?.items?.find(item =>
      item?.name?.trim().toLowerCase() ===
      product?.ProductName?.trim().toLowerCase()
    );

    console.log("PRODUCT:", product.ProductName);
    console.log("MATCHED ITEM:", matchedItem);

    return {
      ...product,
      supplierName: matchedOrder?.supplierName || "Unknown",
      invoiceNumber: matchedOrder?.invoiceNumber || "N/A",
      batch: matchedItem?.batch || product?.ProductBatchNo,
      hsn: matchedItem?.hsn || "N/A",
      pack: matchedItem?.pack || "N/A",
      rate: matchedItem?.rate || product?.ProductPrice,
      expiry: matchedItem?.expiry || product?.ProductExpiryDate,
      qty: matchedItem?.qty || product?.ProductQuantity,
    };
  });
}, [lowStockItems, orders]);
const categories = React.useMemo(() => {
  const cats = enrichedLowStockItems.map(
    item => item.ProductCategory || "Pharma"
  );

  return ["All Items", ...new Set(cats)];
}, [enrichedLowStockItems]);

const filteredItems =
  activeCategory === "All Items"
    ? enrichedLowStockItems
    : enrichedLowStockItems.filter(
        item =>
          (item.ProductCategory || "Pharma") === activeCategory
      );

      const stockAnalysis = React.useMemo(() => {
  return filteredItems.map((product) => {
    const productName = product?.ProductName?.trim().toLowerCase();

    // Total ordered qty for same medicine from all orders
    const totalOrderedQty = orders.reduce((acc, order) => {
      const matchedQty = (order.items || [])
        .filter(
          (item) =>
            item?.name?.trim().toLowerCase() === productName
        )
        .reduce(
          (sum, item) =>
            sum + (item.qty || item.quantity || 0),
          0
        );

      return acc + matchedQty;
    }, 0);

    const currentStock =
      product?.ProductQuantity || product?.qty || 0;

    const shortage = Math.max(
      0,
      totalOrderedQty - currentStock
    );

    return {
      ...product,
      totalOrderedQty,
      currentStock,
      shortage,
    };
  });
}, [filteredItems, orders]);
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

 {stockAnalysis?.map((item, i) => {

  const quantity = item.ProductQuantity || item.qty || 0;

  const stockPercent = Math.min(
    100,
    (quantity / (quantity + 200)) * 100
  );

  const expiryDate =
    item?.ProductExpiryDate || item?.expiry;

  return (
    <div
      key={i}
      className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h3 className="font-bold text-lg text-slate-900">
            {item?.ProductName || item?.name}
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            SKU: {item?.ProductSku || "N/A"}
          </p>
        </div>
<span
  className={`text-xs px-3 py-1 rounded-full font-semibold
    ${
      quantity < 100
        ? "bg-red-100 text-red-600"
        : quantity < 300
        ? "bg-yellow-100 text-yellow-700"
        : "bg-green-100 text-green-700"
    }
  `}
>
  {quantity < 100
    ? "LOW STOCK"
    : quantity < 300
    ? "MEDIUM"
    : "GOOD"}
</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-2 gap-y-3 text-sm mb-5">

        <div>
          <p className="text-slate-400">Category</p>
          <p className="font-medium">
            {item?.ProductCategory || "Medicine"}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Batch</p>
          <p className="font-medium">
            {item?.ProductBatchNo || item?.batch || "N/A"}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Stock</p>
          <p className="font-bold text-orange-600">
            {quantity} Units
          </p>
        </div>

        <div>
          <p className="text-slate-400">MRP</p>
          <p className="font-medium">
            ₹{item?.ProductPrice || item?.mrp || 0}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Supplier</p>
          <p className="font-medium">
            {item?.supplierName || "Unknown"}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Invoice</p>
          <p className="font-medium">
            {item?.invoiceNumber || "N/A"}
          </p>
        </div>

        <div className="col-span-2">
          <p className="text-slate-400">Expiry</p>
          <p className="font-medium text-red-500">
            {expiryDate
              ? new Date(expiryDate).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      </div>

{/* Demand Analysis */}
{/* Demand Analysis */}
<div className="bg-slate-50 rounded-2xl p-4 mb-5 border border-slate-100">
  <h4 className="text-xs font-bold text-slate-500 uppercase mb-4">
    Demand Analysis
  </h4>

  <div className="grid grid-cols-2 gap-3 text-sm">

    {/* Total Orders */}
    <div className="bg-white rounded-xl p-3 border">
      <p className="text-slate-400 text-xs">Total Ordered</p>
      <p className="font-bold text-blue-600 text-xl">
        {item.totalOrderedQty}
      </p>
      <p className="text-[11px] text-slate-400">
        Units required in all orders
      </p>
    </div>

    {/* Current Stock */}
    <div className="bg-white rounded-xl p-3 border">
      <p className="text-slate-400 text-xs">Current Stock</p>
      <p className="font-bold text-green-600 text-xl">
        {item.currentStock}
      </p>
      <p className="text-[11px] text-slate-400">
        Units available
      </p>
    </div>

    {/* Remaining */}
    <div className="bg-white rounded-xl p-3 border">
      <p className="text-slate-400 text-xs">After Orders</p>

      <p
        className={`font-bold text-xl ${
          item.currentStock - item.totalOrderedQty >= 0
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {item.currentStock - item.totalOrderedQty}
      </p>

      <p className="text-[11px] text-slate-400">
        Remaining stock
      </p>
    </div>

    {/* Shortage */}
    <div className="bg-white rounded-xl p-3 border">
      <p className="text-slate-400 text-xs">Need To Order</p>

      <p
        className={`font-bold text-xl ${
          item.shortage > 0
            ? "text-red-600"
            : "text-green-600"
        }`}
      >
        {item.shortage}
      </p>

      <p className="text-[11px] text-slate-400">
        Extra units required
      </p>
    </div>
  </div>

  {/* Alert Box */}
  {item.shortage > 0 ? (
    <div className="mt-4 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
      <p className="text-red-600 text-sm font-semibold">
        ⚠ Shortage Detected
      </p>

      <p className="text-xs text-red-500 mt-1">
        You need to order <strong>{item.shortage}</strong> more units to fulfill all customer orders.
      </p>
    </div>
  ) : (
    <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
      <p className="text-green-600 text-sm font-semibold">
        ✔ Stock is sufficient
      </p>

      <p className="text-xs text-green-500 mt-1">
        Current stock can fulfill all orders.
      </p>
    </div>
  )}
</div>
      {/* Progress */}
      <div className="mb-5">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-slate-500">Stock Level</span>
          <span className="font-semibold text-orange-600">
            {stockPercent.toFixed(0)}%
          </span>
        </div>

        <div className="w-full bg-slate-100 h-2 rounded-full">
          <div
            className="bg-orange-500 h-2 rounded-full"
            style={{ width: `${stockPercent}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-xl text-sm font-semibold">
          Restock
        </button>

        <button className="px-4 border border-slate-200 rounded-xl hover:bg-slate-50">
          View
        </button>
      </div>
    </div>
  );
})}
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
