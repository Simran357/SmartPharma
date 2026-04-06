import React from 'react';
import {
  ArrowLeft,
  Pencil,
  ShoppingCart,
  Headset,

} from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function OneMedicine() {
  const [batches, setBatches] = useState([
  {
    id: "DL2410",
    entryDate: "Sep 12, 2023",
    price: 18.4,
    expiry: "Mar 2026",
    stock: 158,
    location: "Rack A-4, Shelf 2",
   status: "ACTIVE"},
     {
    id: "DL2345",
    entryDate: "Jun 05, 2023",
    price: 19.1,
    expiry: "Jan 2025",
    stock: 250,
    location: "Warehouse 1-B",
    status: "ACTIVE",
  },

  ])
  // Expiry
  const getExpiryStyle = (expiry) => {
    const today = new Date();
    const expDate = new Date(expiry);

    if (expDate < today) return "text-red-500 bg-red-50";

    const diff = (expDate - today) / (1000 * 60 * 60 * 24);
    if (diff < 30) return "text-yellow-500 bg-yellow-50";

    return "text-green-500 bg-green-50";
  };

  const getStatusStyle = (status) => {
  switch (status) {
    case "ACTIVE":
      return "bg-green-100 text-green-700";
    case "CRITICAL":
      return "bg-red-100 text-red-600";
    case "DEPLETED":
      return "text-slate-300";
    default:
      return "";
  }
};
useEffect(() => {
  const fetchBatches = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/batches");
      setBatches(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchBatches();
}, []);
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 flex flex-col">
  
      <div className="flex flex-1 overflow-hidden">

        {/* Center Content */}
        <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          
          {/* Header Area */}
          <div>
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
                  <ArrowLeft size={20} />
                </button>
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dolo 650 Tablet</h1>
                  <p className="text-slate-500 font-medium mt-1">Strip of 15 • Schedule H Drug</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-sm font-bold transition-all shadow-sm">
                  <Pencil size={16} /> Edit Product
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-bold transition-all shadow-sm shadow-green-500/20 active:scale-95">
                  <ShoppingCart size={16} /> Order Stock
                </button>
              </div>
            </div>
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 6-Month Sales Trend */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">6-Month Sales Trend</h2>
                  <p className="text-xs text-slate-500 font-medium mt-1">Demand forecasting and movement</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div>Sales</div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Stock In</div>
                </div>
              </div>
              
              {/* Empty Space for Chart - mock x axis */}
              <div className="flex-1 min-h-160px flex flex-col justify-end relative">
                <div className="absolute inset-0 z-0">
                   {/* We would place a Chart component here */}
                </div>
                {/* Mock X-Axis */}
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase mt-4 pt-4 border-t border-slate-100 px-6 z-10">
                  <span>MAY</span>
                  <span>JUN</span>
                  <span>JUL</span>
                  <span>AUG</span>
                  <span>SEP</span>
                  <span className="text-green-500">OCT</span>
                </div>
              </div>
            </div>

            {/* Related Alternatives */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5">Related Alternatives</h2>
              
              <div className="flex flex-col gap-4">
                {/* Alt 1 */}
                <div className="bg-purple-50/30 border border-purple-100 rounded-xl p-4 transition-all hover:shadow-md hover:border-purple-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900">Calpol 650mg</h3>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[9px] font-extrabold uppercase tracking-wider rounded">HIGH MARGIN</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-3">Margin: <span className="text-purple-600">+15% vs Current</span></p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-extrabold text-slate-900">₹28.50</span>
                    <a href="#" className="text-xs font-bold text-purple-600 hover:text-purple-700 underline decoration-2 underline-offset-2">Switch</a>
                  </div>
                </div>

                {/* Alt 2 */}
                <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 transition-all hover:shadow-md hover:border-slate-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900">P-650 Tablet</h3>
                    <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[9px] font-extrabold uppercase tracking-wider rounded">GENERIC</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-3">Margin: Same</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-extrabold text-slate-900">₹22.00</span>
                    <a href="#" className="text-xs font-bold text-slate-600 hover:text-slate-900 underline decoration-2 underline-offset-2">Switch</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Detailed Batch History */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-4">
            <div className="px-6 py-5 flex justify-between items-center border-b border-slate-100 bg-white">
              <h2 className="text-lg font-bold text-slate-900">Detailed Batch History</h2>
              <a href="#" className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">View All Archive</a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    <th className="px-6 py-4 font-extrabold">BATCH ID</th>
                    <th className="px-6 py-4 font-extrabold">DATE OF ENTRY</th>
                    <th className="px-6 py-4 font-extrabold">PURCHASE PRICE</th>
                    <th className="px-6 py-4 font-extrabold">EXPIRY DATE</th>
                    <th className="px-6 py-4 font-extrabold">CURRENT STOCK</th>
                    <th className="px-6 py-4 font-extrabold">LOCATION</th>
                    <th className="px-6 py-4 font-extrabold">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {/* Row 1
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">DL2410</td>
                    <td className="px-6 py-4">Sep 12, 2023</td>
                    <td className="px-6 py-4 font-bold text-slate-900">₹18.40</td>
                    <td className="px-6 py-4 font-bold text-green-500 bg-green-50/30">Mar 2026</td>
                    <td className="px-6 py-4 font-bold text-slate-900">158 Units</td>
                    <td className="px-6 py-4 text-xs">Rack A-4, Shelf 2</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[9px] font-extrabold uppercase tracking-wider rounded-md">ACTIVE</span>
                    </td>
                  </tr> */}
                  {batches.map((batch, index) => (
    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4 font-bold text-slate-900">
        {batch.id}
      </td>

      <td className="px-6 py-4">{batch.entryDate}</td>

      <td className="px-6 py-4 font-bold text-slate-900">
        ₹{batch.price}
      </td>

     <td className={`px-6 py-4 font-bold ${getExpiryStyle(batch.expiry)}`}>
  {batch.expiry}
</td>

      <td className="px-6 py-4 font-bold text-slate-900">
        {batch.stock} Units
      </td>

      <td className="px-6 py-4 text-xs">{batch.location}</td>

      <td className="px-6 py-4">
        {/* <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[9px] font-extrabold uppercase rounded-md">
          {batch.status}
        </span> */}
        <span
  className={`px-2.5 py-1 text-[9px] font-extrabold uppercase rounded-md ${getStatusStyle(batch.status)}`}
>
  {batch.status}
</span>
      </td>
    </tr>
  ))}
</tbody>
</table>
{/*                   
                  Row 2
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">DL2345</td>
                    <td className="px-6 py-4">Jun 05, 2023</td>
                    <td className="px-6 py-4 font-bold text-slate-900">₹19.10</td>
                    <td className="px-6 py-4 font-bold text-slate-900">Jan 2025</td>
                    <td className="px-6 py-4 font-bold text-slate-900">250 Units</td>
                    <td className="px-6 py-4 text-xs">Warehouse 1-B</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[9px] font-extrabold uppercase tracking-wider rounded-md">ACTIVE</span>
                    </td>
                  </tr> */}
                  
                  {/* Row 3 */}
                  {/* <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">DL2201</td>
                    <td className="px-6 py-4">Jan 20, 2022</td>
                    <td className="px-6 py-4 font-bold text-slate-900">₹17.80</td>
                    <td className="px-6 py-4 font-bold text-red-500 bg-red-50/30">Oct 2023</td>
                    <td className="px-6 py-4 font-bold text-slate-900">12 Units</td>
                    <td className="px-6 py-4 text-xs">Counter Display</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-red-100 text-red-600 text-[9px] font-extrabold uppercase tracking-wider rounded-md">CRITICAL</span>
                    </td>
                  </tr>
                   */}
                  {/* Row 4 (Disabled/Depleted style) */}
                  {/* <tr className="text-slate-300">
                    <td className="px-6 py-4 font-bold"><strike>DL2105</strike></td>
                    <td className="px-6 py-4">May 15, 2021</td>
                    <td className="px-6 py-4">₹17.20</td>
                    <td className="px-6 py-4">Jun 2023</td>
                    <td className="px-6 py-4">0 Units</td>
                    <td className="px-6 py-4 text-xs">--</td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-widest">DEPLETED</span>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>

        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-3 px-6 flex w-full justify-between items-center z-10 ">
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
            <Headset size={16} /> SUPPORT: 1800-PHARMA-CARE
          </button>
          
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
             <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
             System Status: <span className="text-slate-600 font-medium">Optimal</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-all shadow-sm">
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-sm">
            Inventory Log History
          </button>
        </div>
      </footer>
    </div>
  );
}

export default OneMedicine;