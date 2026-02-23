import React from "react";
import { FiEdit, FiShoppingCart } from "react-icons/fi";

function SingleMedicineInfo() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* ===== MAIN CONTENT (UNCHANGED) ===== */}
      <div className="flex flex-1">

        {/* LEFT BAR */}
        <div className="w-1/4 bg-white px-5 py-6 flex flex-col ">
          <h1 className="text-gray-500 text-lg font-semibold">
            Product Overview
          </h1>

          <div className="mt-5 mb-3">
            <p className="text-gray-500">Generic Pharma</p>
            <h3 className="text-sm font-bold">Paracetamol 650mg</h3>
          </div>

          <div className="mt-3 mb-3">
            <p className="text-gray-500">Generic Pharma</p>
            <h3 className="text-sm font-bold">Paracetamol 650mg</h3>
          </div>

          <div className="mt-3 mb-3">
            <p className="text-gray-500">Generic Pharma</p>
            <h3 className="text-sm font-bold">Paracetamol 650mg</h3>
          </div>

          <div className="border-2 border-green-500 bg-green-50 p-4 rounded-xl flex flex-col gap-1.5 mt-8 w-80">
            <h2 className="text-base font-semibold text-green-600">Total Inventory</h2>
            <h1 className="text-2xl font-bold">420 Units</h1>
            <p className="text-gray-500">Est. Value 13400</p>
          </div>

          <div className="border-2 border-red-500 bg-red-50 p-4 rounded-xl flex flex-col gap-1.5 mt-8 w-80">
            <h2 className="text-base font-semibold text-red-600">Low Stock</h2>
            <h1 className="text-2xl font-bold">12 Items</h1>
          </div>
        </div>

        {/* RIGHT BAR */}
        <div className="w-3/4 bg-gray-200 px-4 py-4">

          <nav className="flex items-center justify-between p-4 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-lg">
                🩺
              </div>

              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Dollo 650 Tablet
                </h1>
                <span className="text-sm text-gray-600">
                  Strip of 15 · Schedule H drug
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <FiEdit size={18} />
                Edit Product
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <FiShoppingCart size={18} />
                Order Stock
              </button>
            </div>
          </nav>

          <div className="flex">
            <div className="mt-6 px-4 flex justify-between items-center w-full">
              <div className="w-2xl bg-white rounded-xl shadow-md p-6 h-70 flex flex-col justify-between">
                <nav className="flex items-center justify-between">
                  <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                      6 Months Sale Trend
                    </h1>
                    <span className="text-sm text-gray-500">
                      Demand Forecasting and Movement
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg">
                      Sales
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                      Stock In
                    </button>
                  </div>
                </nav>

                <div className="flex items-center justify-around text-gray-600 font-medium">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>

              <div className="w-sm">
                <div className="bg-white rounded-xl shadow-md p-6 h-70 flex flex-col justify-between">
                  <nav className="flex items-center justify-between">
                    <div>
                      <h1 className="text-lg font-semibold text-gray-800">
                        New Trend Section
                      </h1>

                      <div className="border-2 border-purple-500 bg-purple-50 p-3 rounded-xl flex flex-col gap-1.5 mt-3 w-80">
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm font-semibold text-purple-600">Total Inventory</h2>
                          <span className="text-xs bg-purple-200 py-1 px-2 rounded-xl text-purple-900">High Margin</span>
                        </div>
                        <h1 className="text-xs font-medium ">Margin: +15% vs Current</h1>
                        <div className="flex items-center justify-between">
                           <p className="text-black-500 text-xs font-bold">₹28.40</p>
                            <a href="" className="text-xs underline mr-2">Switch</a>
                        </div>
                      </div>
                      <div className="border-2 border-purple-500 bg-purple-50 p-3 rounded-xl flex flex-col gap-1.5 mt-3 w-80">
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm font-semibold text-purple-600">Total Inventory</h2>
                          <span className="text-xs bg-purple-200 py-1 px-2 rounded-xl text-purple-900">High Margin</span>
                        </div>
                        <h1 className="text-xs font-medium ">Margin: +15% vs Current</h1>
                        <div className="flex items-center justify-between">
                           <p className="text-black-500 text-xs font-bold">₹28.40</p>
                            <a href="" className="text-xs underline mr-2">Switch</a>
                        </div>
                      </div>

                    </div>
                  </nav>


                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 mx-4 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="font-semibold text-gray-700">
                Detailed Batch History
              </h2>
              <span className="text-sm text-green-600 cursor-pointer">
                View All Archive
              </span>
            </div>

            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Batch ID</th>
                  <th className="px-6 py-3">Date of Entry</th>
                  <th className="px-6 py-3">Purchase Price</th>
                  <th className="px-6 py-3">Expiry Date</th>
                  <th className="px-6 py-3">Current Stock</th>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-4">DL2410</td>
                  <td className="px-6 py-4">Sep 12, 2023</td>
                  <td className="px-6 py-4">₹18.40</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Mar 2026</td>
                  <td className="px-6 py-4">158 Units</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-md text-xs">
                      Rack A-4, Shelf 2
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                      ACTIVE
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">DL2410</td>
                  <td className="px-6 py-4">Sep 12, 2023</td>
                  <td className="px-6 py-4">₹18.40</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Mar 2026</td>
                  <td className="px-6 py-4">158 Units</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-md text-xs">
                      Rack A-4, Shelf 2
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                      ACTIVE
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">DL2410</td>
                  <td className="px-6 py-4">Sep 12, 2023</td>
                  <td className="px-6 py-4">₹18.40</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Mar 2026</td>
                  <td className="px-6 py-4">158 Units</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-md text-xs">
                      Rack A-4, Shelf 2
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                      ACTIVE
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM NAVBAR (ONLY ADDITION) ===== */}
      <div
        className="w-full bg-white border-t flex items-center justify-center h-9"

      >
        <p className="text-[0.7vw] text-gray-600">
          Inventory Management System • 2026
        </p>
      </div>

    </div>
  );
}

export default SingleMedicineInfo;