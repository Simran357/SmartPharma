import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MovingIcon from '@mui/icons-material/Moving';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function OrdersOverview() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* ================= HEADER ================= */}
      <h1 className="text-2xl font-bold mb-6">Orders Overview</h1>

      {/* ================= TOP CARDS ================= */}
     {/* </div> <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"> */}
<div className="flex gap-6">
  
  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border border-gray-600 w-64">
  
    <div className="flex items-center justify-between">
    <p className="text-gray-400 text-sm font-semibold">
        TOTAL ORDERS TODAY
    </p>
    <ShoppingCartIcon className="text-red-500 " />
  </div>
    <div className="flex items-center gap-3">
      <span className="text-4xl font-bold text-black">142</span>
      <span className="text-green-600 font-semibold"><MovingIcon className="text-green-500" />12%</span>
    </div>
  </div>
      
      
  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border border-gray-600 w-64">
    <p className="text-gray-400 text-sm font-semibold">
      IN PROGRESS
    </p>

    <div className="flex items-center gap-3 mt-2">
      <span className="text-4xl font-bold text-black">38</span>
      <span className="text-green-600 font-semibold"><MovingIcon className="text-green-500" />5%</span>
    </div>
  </div>
   {/* Card 3 */}
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border border-gray-600 w-64">
   <div className="flex items-center justify-between">
     
    <p className="text-gray-400 text-sm font-semibold">
        READY FOR DISPATCH
    </p>
<Inventory2Icon className="text-blue-500" />
    
  </div>


    <div className="flex items-center gap-3 mt-2">
      <span className="text-4xl font-bold text-black">24</span>
      <span className="text-red-600 font-semibold"><MovingIcon className="text-red-500" />2%</span>
    </div>
</div>
{/* Card 4 */}
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border border-gray-600 w-64">
    <div className="flex items-center justify-between">
    <p className="text-gray-400 text-sm font-semibold">
      IN TRANSIT
    </p>
<LocalShippingIcon className="text-blue-500" />
    
  </div>

    <div className="flex items-center gap-3 mt-2">
      <span className="text-4xl font-bold text-black">65</span>
      <span className="text-green-600 font-semibold"><MovingIcon className="text-green-500" />8%</span>
    </div>
  </div>
  
  {/* Card 5 */}
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border border-gray-600 w-64">
    <div className="flex items-center justify-between">
    <p className="text-gray-400 text-sm font-semibold">
      DELAYED
    </p>

    <WarningAmberIcon className="text-red-500" /> 
  </div>
    <div className="flex items-center gap-3 mt-2">
      <span className="text-4xl font-bold text-black">15</span>
      <span className="text-yellow-500 font-semibold"><ArrowForwardIcon sx={{ color: "yellow" }} />1%</span>
    </div>
  </div>
  
  {/* Card 6 */}
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col border border-gray-600 w-64">
    <div className="flex items-center justify-between">
    <p className="text-gray-400 text-sm font-semibold">
      PENDING ORDERS
    </p>

     <AccessTimeFilledIcon className="text-yellow-500" /> 
  </div>

    <div className="flex items-center gap-3 mt-2">
      <span className="text-4xl font-bold text-black">14</span>
      <span className="text-green-600 font-semibold"><MovingIcon className="text-green-500" />4%</span>
    </div>
    <div className='p-2 mt-4 border border-gray-500  text-center text-black'>VIEW DETAILS</div>
  </div>
</div>

      {/* ================= MAIN SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">


{/* search */}
<div className="flex items-center bg-white justify-between border mt-8 border-gray-600 p-4 w-full ">

  {/* Left Side - Search */}
  <div className="border border-gray-500 bg-white p-2">
    Search OrderID, Retailer
  </div>


  {/* Right Side - Filters */}
  <div className="flex items-center gap-6">

    <select className="border bg-white border-gray-500 p-2 rounded-md">
      <option>Status All</option>
    </select>

    <select className="border border-gray-500 p-2 rounded-md">
      <option>Retailer: All</option>
    </select>

    <select className="border border-gray-500 p-2 rounded-md">
      <option>Impact: Any</option>
    </select>

    <div className="border border-gray-500 p-2 rounded-md">
      Date Range
    </div>
  </div>
</div>
          {/* Order Card */}
          <div className="bg-white p-6 rounded-xl shadow">

             <div className="flex justify-between items-center mb-4 relative">
              <div>
                <div className="flex gap-4">
                <h2 className="font-bold text-lg">#ORD-88291 </h2>
                <span className="text-orange-400 text-lg">PROCESSING</span>
                
                <div className="absolute right-55 flex flex-row gap-4">
                  <h2 className="text-red-400">HIGH IMPACT</h2>
                  <span className="text-orange-300">Auto Cart Triggered</span>
                </div> 
                </div>
              <div className="flex gap-8">
                <p className="text-black">City Care Pharmaceuticals</p>
                

  <div class="flex justify-between items-center relative">
    
    
    <div class="absolute top-2 left-0 w-full h-1 bg-gray-300"></div>
    <div class="absolute top-2 left-0 w-1/2 h-1 bg-orange-500"></div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
      <p class="text-orange-500 text-sm mt-2">New</p>
    </div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
      <p class="text-orange-500 text-sm mt-2">Packed</p>
    </div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
      <p class="text-orange-500 text-sm mt-2">Dispatch</p>
    </div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
      <p class="text-gray-400 text-sm mt-2">Transit</p>
    </div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
      <p class="text-gray-400 text-sm mt-2">Delivered</p>
    </div>

  </div>

<div>
  <p className="text-gray-500">3 SKUs near stock-out. 2 Batches allocated from secondary warehouse.</p></div>
                 </div>
                 <div className="gap-4 flex flex-row">
                  <h2 className="text-gray-600">Oct 24, 2026</h2>
                  <span className="text-gray-600"> . 12 Items</span>
                  <span className="text-black"> . $4,280.00</span>
                 </div>
              </div>

              <button className="bg-orange-500 text-white px-5 py-2 rounded-lg">
                View Order
              </button>
            </div>
  


            {/* Medicine Table */}
            <table className="w-full text-left mt-4">
              <thead className="text-gray-500 text-sm border-b">
                <tr>
                  <th className="py-2">MEDICINE SKU</th>
                  <th>ORDERED</th>
                  <th>AVALIABLE</th>
                  <th>POST-ORDER</th>
                  <th>EXPIRY RISK</th>
                </tr>
              </thead>

              <tbody className="text-sm">

                <tr className="border-b bg-red-100">
                  <td className="py-3 text-black font-bold">Amoxicillin 500mg (Box 100)</td>
                  <td>50</td>
                  <td>52</td>
                  <td className="text-red-600 font-semibold">
                    2 (CRITICAL)
                  </td>
                  <td>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">
                      None
                    </span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-3 text-black font-bold">Lisinopril 10mg (Pack 30)</td>
                  <td>120</td>
                  <td>850</td>
                  <td>730</td>
                  <td>
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
                      Near Expiry (Nov 23)
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3 text-black font-bold">Atorvastatin 20mg (Pack 90)</td>
                  <td>30</td>
                  <td>412</td>
                  <td>382</td>
                  <td>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">
                      None
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
       
          </div>

        
                {/* second Order Card */}
          <div className="bg-white p-6 rounded-xl shadow">
          
              <div className="flex justify-between items-center mb-4 relative">
              <div>
                <div className="flex  gap-4">
                <h2 className="font-bold text-lg">#ORD-88291 </h2>
                
                <span className="bg-green-100 text-green-600 px-4 py-2 rounded-md text-sm font-medium">
    DISPATCHED
  </span>
                <div className="absolute right-55 flex flex-row gap-4">
                  <h2 className="text-black px-4 py-2 rounded-md bg-gray-300">LOW IMPACT</h2>
                 
                </div> 
                </div>
              <div className="flex gap-8">
                <p className="text-black font-bold">Unity Health Clinics</p>
                <div class="flex justify-between items-center relative">
    
    
    <div class="absolute top-2 left-0 w-full h-1 bg-gray-300"></div>
    <div class="absolute top-2 left-0 w-1/2 h-1 bg-orange-500"></div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
      <p class="text-orange-500 text-sm mt-2">New</p>
    </div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
      <p class="text-orange-500 text-sm mt-2">Packed</p>
    </div>
    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
      <p class="text-orange-500 text-sm mt-2">Dispatch</p>
    </div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
      <p class="text-gray-400 text-sm mt-2">Transit</p>
    </div>

    
    <div class="z-10 flex flex-col items-center">
      <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
      <p class="text-gray-400 text-sm mt-2">Delivered</p>
    </div>
    </div>
    <p className="text-black">All items standard stock.Healthy margin on all batches.No secondary warehouses needed.</p>
                </div>
              <div className="gap-4 flex flex-row">
                  <h2 className="text-gray-600">Oct 24, 2026</h2>
                  <span className="text-gray-600"> . 8 Items</span>
                  <span className="text-black"> . $1,850.00</span>
                 </div>
              </div>

              <button className="bg-orange-500 text-white px-5 py-2 rounded-lg">
                View Order
              </button>
              
                

          
        </div>
        </div>
        </div>

 
       
                

        {/* RIGHT SIDE PANEL */}
        <div className="space-y-6">

          {/* Inventory Risk */}
          <div className="bg-white p-6 mt-4 rounded-xl shadow">
            <h3 className="font-bold text-3xl text-black mb-10">Inventory Risk Summary</h3>
           <p className="text-gray-400">TOP DEPLETION RISKS</p>

            {/* Item 1 */}
      <div className="mb-6">
        <div className="flex justify-between">
          <span className="font-medium">Amoxicillin 500mg</span>
          <span className="text-red-600 font-semibold">2 Left</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div className="w-[10%] h-2 bg-red-500 rounded-full"></div>
        </div>

        <span className="text-xs text-gray-400 block mt-1">
          Triggered by 3 new orders
        </span>
      </div>
      {/* Item 2 */}
      <div className="mb-6">
        <div className="flex justify-between">
          <span className="font-medium">Metformin 850mg</span>
          <span className="text-yellow-600 font-semibold">18 Left</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div className="w-[25%] h-2 bg-yellow-500 rounded-full"></div>
        </div>

        <span className="text-xs text-gray-400 block mt-1">
          Triggered by Order #ORD-88291
        </span>
      </div>

      {/* Item 3 */}
      <div className="mb-6">
        <div className="flex justify-between">
          <span className="font-medium">Vitamin C 1000mg</span>
          <span className="text-yellow-600 font-semibold">45 Left</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div className="w-[50%] h-2 bg-yellow-500 rounded-full"></div>
        </div>
      </div>

      {/* Item 4 */}
      <div className="mb-6">
        <div className="flex justify-between">
          <span className="font-medium">Omeprazole 20mg</span>
          <span className="text-gray-700 font-semibold">82 Left</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div className="w-[75%] h-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-4">
        <button className="w-full border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50 transition">
          Review Stock Replenishment
        </button>
      </div>
          </div>

          {/* Auto Cart Alert */}
         <div className="bg-orange-300 border border-orange-300 p-4 rounded-lg">
          <h2 className="text-orange-500 text-2xl font-extrabold">AUTO-CART ALERTS</h2>
  <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
  <div className="flex justify-between items-center">
    <p className="text-black font-medium">
      Will Trigger Reorder
    </p>

    <span className="bg-orange-600 text-white border border-orange-500 px-2 py-1 rounded-md text-sm">
      CRITICAL
    </span>
  </div>

  <p className="text-gray-600 mt-2">
    Antibiotics Group 4 will reach reorder point after next dispatch.
  </p>
</div>

<div className="bg-white border border-gray-300 mt-4 rounded-lg p-4 shadow-sm">

  <div className="flex justify-between items-center">
    <p className="text-black font-medium">
      Batch Ending Soon
    </p>

    <span className="text-white border bg-yellow-500 border-yellow-500 px-2 py-1 rounded-md text-sm">
      WARNING
    </span>
  </div>

  <p className="text-gray-600 mt-2">
    Batch #BN-99201 for Insulin Vials expires in 45 days.
  </p>


        </div>
      </div>
    </div>
    </div>
   
    </div>
  );
}
