import React from 'react'
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DoneIcon from '@mui/icons-material/Done';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useNavigate } from "react-router-dom";
const WholeSaler = () => {
  const navigate = useNavigate()
  return (
    
    <div className=" bg-gray-50 p-6 md:p-10 ">
      {/* <!-- BEGIN: Main Dashboard Layout --> */}
      <main className='max-w-7xl mx-auto space-y-10 '>
        {/* <!-- Dashboard Header: Contains greeting and search/notification bar | --> */}
        <header className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <div >
            <h1 className='text-3xl font-bold text-slate-800 tracking-tight'>Dashboard Overview</h1>
            <p className=' text-slate-500 mt-1'>Welcome back, Amit. Here is what's happening today.</p>
          </div>
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <input
                type="text"
                className="w-64 pl-10 pr-4 py-2 border border-slate-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                placeholder="Search medicines, orders..." />

              <button className="bg-white border border-slate-200 rounded-xl p-2 hover:bg-slate-50 transition-colors relative ml-2" >
                <NotificationsNoneSharpIcon className="  " />
              </button>
            </div>
          </div>
        </header>
        {/* <!-- BEGIN: Top Stats Row --> */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer  gap-6">
          {/* <!-- Daily Sales --> */}
          <div
             onClick={()=>navigate("/AiAgent")}
           className='  bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow'>
            <div class="flex justify-between items-start">
              <div >
                <p className='font-medium text-slate-500'>Daily Sales</p>
              </div>
              <div className='bg-blue-50 rounded-lg p-2 text-blue-600'>
                <AttachMoneyIcon className='' />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-bold text-slate-800">$12,450.00</h2>
              <span class="text-green-500 text-sm font-semibold flex items-center gap-1 mt-1">
                +12.5% vs yesterday
              </span>
              <div className='mt-4'>


              </div>
            </div>
          </div>
          {/* <!-- Pending Orders --> */}
          <div className='bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow'>
            <div className="flex justify-between items-start">
              <span className="text-slate-500 font-medium">Pending Orders</span>
              <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                <CardTravelIcon className='' />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-bold text-slate-800">48</h2>
              <span className="text-red-500 text-sm font-semibold flex items-center gap-1 mt-1">
                -5% fulfillment rate
              </span>
            </div>
          </div>
          {/* <!-- Low Stock Alerts --> */}
          <div
             onClick={() => navigate("/Lowstock")}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 font-medium">Low Stock Alerts</span>
              <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                <WarningAmberIcon />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-bold text-slate-800">12 Items</h2>
              <span className="text-slate-500 text-sm font-medium mt-1">High Priority Restock</span>
            </div>
          </div>
          {/* <!-- Expiry Alerts --> */}
          <div
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-slate-500 font-medium">Expiry (30 Days)</span>
              <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                <DateRangeIcon />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-bold text-slate-800">24 Batches</h2>
              <span className="text-rose-600 text-sm font-bold mt-1 uppercase tracking-wider">Critical Risk</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* <!-- BEGIN: Left Column (Main Content) --> */}
          <div className='lg:col-span-2 space-y-10'>
            <section >
              <h3 className='text-xl mb-6 font-bold text-slate-800 flex items-center gap-2'>
                <ElectricBoltIcon className='w-5 h-5  text-blue-400 ' />
                Quick Actions</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
                <button className=' p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all text-center group '>
                  <div className='w-12 h-12 bg-blue-50  text-blue-500 rounded-xl m-auto  mb-3 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors'>
                    <AddIcon className='w-6 h-6' />
                  </div>
                  <span class="block text-sm font-bold text-slate-700">New Stock</span>
                  <span class="text-[10px] text-slate-400 uppercase tracking-tighter">Purchase Entry</span>
                </button>

                <button
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all text-center group">
                  <div
                    className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircleOutlineOutlinedIcon />
                  </div>
                  <span className="block text-sm font-bold text-slate-700">Approve Requests</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Franchise Portal</span>
                </button>

                <button
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all text-center group">
                  <div
                    className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircleOutlineOutlinedIcon />

                  </div>
                  <span className="block text-sm font-bold text-slate-700">Dispatch</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Ship Orders</span>
                </button>

                <button
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all text-center group">
                  <div
                    className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <DeleteForeverOutlinedIcon />
                  </div>
                  <span className="block text-sm font-bold text-slate-700">Record Waste</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Damaged Goods</span>
                </button>

              </div>
            </section>
            {/* <!-- BEGIN: Recent Online Orders --> */}
            <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className='flex justify-between  items-center p-6 border-b border-slate-50'>
                <h3 className='text-xl font-bold text-slate-600 '>Recent Online Orders</h3>
                <a className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  href="#">View All Orders</a>
              </div>

              <div className='overflow-x-auto'>
                <table className='w-full text-left  border-collapse'>
                  <thead>
                    <tr className='bg-slate-50'>
                      <th className='px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest '>
                        Order ID</th>
                      <th
                        class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Pharmacy / Customer</th>
                      <th
                        class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Value</th>
                      <th
                        class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Status</th>
                      <th
                        class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                        Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 text-sm font-semibold text-slate-600">#ORD-9024</td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-bold text-slate-800 leading-tight">City Care Pharma</p>
                        <p className="text-xs text-slate-400">Nagpur, MH</p>
                      </td>
                      <td className="px-6 py-5 text-sm font-bold text-slate-800">$1,240.00</td>
                      <td className="px-6 py-5">
                        <span className="status-pill status-pending"><span
                          className="inline-block w-2 h-2 rounded-full mr-2 bg-current shadow-[0_0_8px_rgba(0,0,0,0.2)]"></span></span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <button
                          className="bg-blue-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors uppercase tracking-wider shadow-sm">Pack
                          Order</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 text-sm font-semibold text-slate-600">#ORD-9023</td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-bold text-slate-800 leading-tight">HealthLine Meds</p>
                        <p className="text-xs text-slate-400">Pune, MH</p>
                      </td>
                      <td className="px-6 py-5 text-sm font-bold text-slate-800">$850.50</td>
                      <td className="px-6 py-5">
                        <span className="status-pill status-packed"><span
                          className="inline-block w-2 h-2 rounded-full mr-2 bg-current shadow-[0_0_8px_rgba(0,0,0,0.2)]"></span></span>
                      </td>
                      <td className="px-6 py-5 text-center flex justify-center gap-3 mt-1 text-slate-400">
                        <svg className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors"
                          fill="none" stroke="currentColor" viewbox="0 0 24 24">
                          <path
                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                        <svg className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors"
                          fill="none" stroke="currentColor" viewbox="0 0 24 24">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 text-sm font-semibold text-slate-600">#ORD-9022</td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-bold text-slate-800 leading-tight">Apex Medicos</p>
                        <p className="text-xs text-slate-400">Mumbai, MH</p>
                      </td>
                      <td className="px-6 py-5 text-sm font-bold text-slate-800">$2,100.00</td>
                      <td className="px-6 py-5">
                        <span className="status-pill status-dispatched"><span
                          className="inline-block w-2 h-2 rounded-full mr-2 bg-current shadow-[0_0_8px_rgba(0,0,0,0.2)]"></span></span>
                      </td>
                      <td className="px-6 py-5 text-center text-slate-400">
                        <svg className="w-5 h-5 mx-auto cursor-pointer hover:text-blue-500" fill="none"
                          stroke="currentColor" viewbox="0 0 24 24">
                          <path
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* <!-- BEGIN: NEW FEATURE - Team Discussion --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- Inventory Health: Visual representation of stock availability --!> */}
              <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Inventory Health</h3>
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewbox="0 0 36 36">
                      <circle cx="18" cy="18" fill="none" r="16" stroke="#f1f5f9" stroke-width="4">
                      </circle>
                      <circle cx="18" cy="18" fill="none" r="16" stroke="#22c55e"
                        stroke-dasharray="70, 100" stroke-linecap="round" stroke-width="4"></circle>
                      <circle cx="18" cy="18" fill="none" r="16" stroke="#f59e0b"
                        stroke-dasharray="15, 100" stroke-dashoffset="-70" stroke-linecap="round"
                        stroke-width="4"></circle>
                      <circle cx="18" cy="18" fill="none" r="16" stroke="#ef4444"
                        stroke-dasharray="15, 100" stroke-dashoffset="-85" stroke-linecap="round"
                        stroke-width="4"></circle>
                    </svg>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2"><span
                      className="w-2 h-2 rounded-full bg-green-500"></span> <span
                        className="text-slate-500">In Stock (70%)</span></div>
                    <div className="flex items-center gap-2"><span
                      className="w-2 h-2 rounded-full bg-amber-500"></span> <span
                        className="text-slate-500">Low Stock (15%)</span></div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full bg-red-500"></span> <span class="text-slate-500">Out
                          of Stock (15%)</span></div>
                  </div>
                </div>
              </section>

              <section className='bg-white p-6 rounded-3xl border border-slate-100 shadow-sm'>
                <h3 className="text-lg font-bold text-slate-800 mb-4">Top Selling Products</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span
                      className="text-sm font-medium text-slate-700">Paracetamol 500mg</span>
                    <span
                      className="text-xs font-bold bg-slate-50 px-2 py-1 rounded">2.4k units</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span
                      className="text-sm font-medium text-slate-700">Paracetamol 500mg</span>
                    <span
                      className="text-xs font-bold bg-slate-50 px-2 py-1 rounded">2.4k units</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span
                      className="text-sm font-medium text-slate-700">Paracetamol 500mg</span>
                    <span
                      className="text-xs font-bold bg-slate-50 px-2 py-1 rounded">2.4k units</span>
                  </li>
                </ul>
              </section>

            </div>
            {/* <!-- Team Discussion: Real-time communication feed for internal staff --!> */}
            <section className='bg-white p-6 rounded-3xl   overflow-hidden border border-slate-100 shadow-sm'>
              <div className='p-6 border-b border-slate-50 flex items-center justify-between '>
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                    <path
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                  Team Discussion
                </h3>
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-bold">LIVE
                  FEED</span>
              </div>
              <div className="p-6 space-y-4">
                {/* <!-- Comment Item --> */}
                <div className="flex gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                  <div
                    className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    AS</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">Amit Sharma</span>
                      <span className="text-[10px] text-slate-400 uppercase font-medium">10:45 AM</span>
                    </div>
                    <p className="text-slate-600 text-sm mt-1">Stock for <span
                      className="text-blue-600 font-semibold">Amoxicillin</span> updated for the morning
                      batch. 500 units added.</p>
                  </div>
                </div>
                {/* <!-- Comment Item --> */}
                <div className="flex gap-4 p-4 rounded-2xl">
                  <div
                    className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    RK</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">Rahul Kapoor</span>
                      <span className="text-[10px] text-slate-400 uppercase font-medium">09:15 AM</span>
                    </div>
                    <p className="text-slate-600 text-sm mt-1">Follow up with <span
                      className="font-semibold text-slate-800">City Care Pharma</span> regarding their
                      outstanding #ORD-9021.</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <input
                    className="flex-1 bg-white border-slate-200 rounded-2xl py-3 px-4 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Type a note for the team..." type="text" />
                  <button
                    className="bg-indigo-600 text-white p-3 rounded-2xl hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </section>

          </div>

          {/* <!-- BEGIN: Right Column (Widgets) --> */}
          <aside className='space-y-8'>
            {/* <!-- Financial Overview: Credit limits and outstanding payment status | --> */}
            <section className='bg-slate-900 rounded-3xl text-white  p-6 shadow-xl relative overflow-hidden'>
              <div className='relative z-10'>
                <h4 className='text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4'>Financial Overview</h4>
                <div className="space-y-4">
                  <div>
                    <p className='text-xs mb-1 text-slate-400 '>Available Credit Limit</p>
                    <p className='text-white font-semibold  text-1xl'>$45,000.00<span
                      className='text-xs font-normal  text-slate-400 ml-1'>/ $100k</span></p>
                    <div className="w-full h-1 bg-slate-800 rounded-full mt-2">
                      <div className="w-[45%] h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-slate-400 text-xs mb-1">Outstanding Payments</p>
                    <p className="text-xl font-bold text-rose-400">$12,340.50</p>
                  </div>
                </div>

                <button
                  className="w-full mt-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-bold transition-colors">Settle
                  Dues</button>
              </div>
            </section>
            {/* <!-- Batch & Expiry Alerts --> */}
            <section className='bg-white rounded-3xl border border-slate-100 shadow-sm p-6'>
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                  Batch &amp; Expiry
                </h4>
                <span
                  className="text-[10px] bg-rose-50 text-rose-600 font-bold px-2 py-0.5 rounded tracking-wider uppercase">24
                  Alerts</span>
              </div>

              <div class="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-rose-500">
                  <div className="flex items-center gap-3">
                    <div class="p-2 bg-white rounded-lg shadow-sm">
                      <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor"
                        viewbox="0 0 24 24">
                        <path
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-800">Amoxicillin 500mg</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-slate-400 font-medium">Batch: AMX-2201</span>
                        <span className="text-[10px] text-rose-600 font-bold uppercase">Expires: 12
                          Oct</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-amber-400">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor"
                        viewbox="0 0 24 24">
                        <path
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-800">Cough Syrup (Z-Type)</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-slate-400 font-medium">Batch: CS-789</span>
                        <span className="text-[10px] text-amber-600 font-bold uppercase">Expires: 28
                          Oct</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-colors">Manage
                Expiry List</button>
            </section>

            {/* <!-- Pending Franchise Requests --> */}
             <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6"
                    data-purpose="franchise-requests-widget">
                    <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <ApartmentIcon className='text-blue-500' />
                        Franchise Requests
                    </h4>
                    <div className="space-y-4">
                        <div
                            className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xs">
                                    JP</div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Janata Pharma</p>
                                    <p className="text-[10px] text-slate-400">New Registration</p>
                                </div>
                            </div>
                            <button
                                className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
                                <DoneIcon />
                            </button>
                        </div>
                        <div
                            className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-xs">
                                    SM</div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Star Meds Co.</p>
                                    <p className="text-[10px] text-slate-400">Credit Limit Increase</p>
                                </div>
                            </div>
                            <button
                                className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
                                <DoneIcon />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50/50 rounded-2xl flex gap-3 items-center">
                        <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                            
                        </div>
                        <p className="text-[11px] text-blue-800 font-medium">3 more requests need your verification today.
                        </p>
                    </div>
                </section>
          </aside>


        </div>
      </main>
    </div>
  )
}
export default WholeSaler