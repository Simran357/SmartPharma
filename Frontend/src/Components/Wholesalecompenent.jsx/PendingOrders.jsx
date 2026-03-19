import React from 'react'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import TodayIcon from '@mui/icons-material/Today';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
const PendingOrders = () => {
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
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
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
                <button className="w-full py-2 px-4 bg-blue-300 hover:bg-blue-600 text-slate-700 font-semibold rounded-lg text-sm transition-colors border border-slate-200">
                  <RestartAltIcon className="inline-block mr-2 text-lg" /> Reset Filters
            </button>
            </div>
            </div>
          </section> 
        </main>
      </div>
    </div>
  )
}

export default PendingOrders
