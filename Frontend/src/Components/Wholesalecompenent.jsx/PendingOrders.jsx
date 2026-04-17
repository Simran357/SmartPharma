import { useEffect, useState } from "react";
import axiosInstance from "../Dashboard/Form/Utils/AxiosInstance";

const PendingOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axiosInstance.get("/registerroute/getWholesalerOrders");
      setOrders(res.data);
    } catch (err) {
      console.log("Error fetching orders", err);
    }
  };

  return (
    <div className='bg-slate-50 font-sans text-slate-900'>
      {/* <!-- BEGIN: Main Dashboard Layout --> */}
      <div className='min-h-screen flex flex-col'>
        {/* <!-- BEGIN: Header --> */}
        <header className='bg-white border-b border-slate-200 sticky py-4 px-6 '>
          {/* <!-- BEGIN: Top Header Area --> */}
          <div className='flex gap-4 items-center'>
            <div className=' p-2 rounded-lg bg-indigo-600 text-white'>
              <Inventory2Icon className='text-3xl ' />
            </div>
            <div>
              <h1 className='font-bold   text-slate-800 text-3xl'>Pending Orders </h1>
              <p className='text-sm text-slate-500'>Manage and process wholesale retailer orders </p>
            </div>
          </div>
        </header>
        {/* <!-- BEGIN: Main Content Container --> */}
        <main className='grow p-6 space-y-6 '>
          {/* <!-- BEGIN: Summary Cards Section --> */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {/* <!-- Card 1 --> */}
            <div className=' flex gap-3  p-5  items-center  bg-white   rounded-lg  shadow-sm border border-slate-200'>
              <div className='p-4 bg-blue-200 rounded-xl '>
                <HistoryIcon className='text-blue-600 text-2xl ' />
              </div>
              <div>
                <p className='text-sm font-medium text-slate-500 uppercase tracking-wider'>Total Pending</p>
                <h2 className='text-2xl font-bold text-slate-800'>124</h2>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="bg-white p-5  items-center rounded-xl shadow-sm border border-slate-100 flex  gap-4">
              <div className="p-4 bg-amber-200  rounded-xl">
                <SettingsIcon className="text-amber-600  text-2xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Processing</p>
                <p className="text-2xl font-bold text-slate-800">42</p>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="bg-white p-5  items-center rounded-xl shadow-sm border border-slate-100 flex  gap-4">
              <div className='bg-green-200 p-4 rounded-xl'>
                <InventoryIcon className='text-green-600 text-2xl' />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Packed</p>
                <p className="text-2xl font-bold text-slate-800">92</p>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl">
                <TodayIcon className="text-2xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Today's Orders</p>
                <p className="text-2xl font-bold text-slate-800">35</p>
              </div>
            </div>
          </section>
          {/* <!-- BEGIN: Search and Filters Bar --> */}
          <section className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* <!-- Search field --> */}
              <div className='lg:col-span-1'>
                <label className='text-xs  mb-1 font-semibold text-slate-500'>Search ID / Retailer</label>
                <div className='relative'>
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <SearchIcon className='text-lg' />
                  </span>
                  <input
                    class="block w-full pl-10 pr-3 py-2 border border-blue-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="ORD-12345..." type="text" />
                </div>
              </div>
              {/* <!-- Status filter --> */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Order Status</label>
                <select className="block w-full py-2 border border-slate-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Packed</option>
                </select>
              </div>
              {/* <!-- Payment Status --> */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Payment Status</label>
                <select className="block w-full py-2 border border-slate-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Payment</option>
                  <option>Paid</option>
                  <option>Unpaid</option>
                  <option>Refunded</option>
                </select>
              </div>
              {/* <!-- Filter 3: Date Range --> */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Date Range</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <TodayIcon className="text-sm" />
                  </span>
                  <input className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"
                    type="date" />
                </div>
              </div>
              {/* <!-- Filter 4: Priority --> */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Priority</label>
                <select className="block w-full py-2 border border-slate-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Priority</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              {/* <!-- Actions: Reset --> */}
              <div className='flex items-end '>
                <button className=" py-2 px-4 bg-blue-300 hover:bg-blue-600 text-slate-700 font-semibold rounded-lg text-sm transition-colors border border-slate-200">
                  <RestartAltIcon className="inline-block mr-2 text-lg" /> Reset Filters
                </button>
              </div>
            </div>
          </section>
          {/* <!-- BEGIN: Table Management Section --> */}
          <section className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            {/* <!-- Table Toolbar --> */}
            <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                    Bulk Actions <KeyboardArrowDownIcon className="text-xs" />
                  </button>
                </div>
                <span className="text-sm text-slate-400">Selected: <strong>0</strong> items</span>
              </div>
              <div className="flex items-center gap-2">
                <button class="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600" title="pdf file">
                  <PictureAsPdfIcon className='text-lg' />
                </button>
                <button class="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600" title="Export CSV">
                  <i class="fa-solid fa-file-csv text-lg"></i>
                </button>
                <button class="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600" title="Export CSV">
                  <i class="fa-solid fa-file-csv text-lg"></i>
                </button>
              </div>
            </div>
            {/* <!-- Table Container --> */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                {/* HEADER */}
                <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4"> <input type="checkbox" /></th>
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Retailer</th>
                    <th className="px-6 py-4">Items</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4">Dates</th>
                    <th className="px-6 py-4">Payment</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                {/* BODY */}
                <tbody className="text-sm divide-y">
                 {orders.map((order, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 font-semibold text-indigo-600">
                        {order.id}
                      </td>

                      <td className="px-6 py-4">
                        <div className="font-medium">{order.retailer}</div>
                        <div className="text-xs text-slate-500">
                          {order.retailerName }
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div>{order.items.length}</div>
                        <div className="text-xs text-slate-500">
                          {order.units}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-right font-bold">
                        {order.total}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1 text-xs">
                          <span>{order.date}</span>
                          <span className="text-orange-600">
                            {order.paymentMethod}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1 text-xs">
                          <span className="bg-slate-100 px-2 rounded">
                            {order.paymentMethod}
                          </span>
                          
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-1 text-xs">
                          <span className="bg-red-100 px-2 rounded">
                            {order.priority}
                          </span>
                          <span className="bg-green-100 px-2 rounded">
                            {order.stock}
                          </span>
                          <span className="bg-orange-100 px-2 rounded">
                            {order.status}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="text-green-600">✔</button>
                          <button className="text-yellow-600">⚙</button>
                          <button className="text-blue-600">📦</button>
                          <button className="text-red-600">✖</button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default PendingOrders
