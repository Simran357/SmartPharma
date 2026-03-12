import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SellIcon from '@mui/icons-material/Sell';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Dailysales = () => {
  return (
    <div className='bg-gray-50 font-display text-slate-900 '>
        {/* <!-- Main Content --> */}
        <main className='flex   flex-col min-h-screen'>
           {/* <!-- Dashboard Header: Title and Primary Action --> */}
            <div className='p-10  mb-1'>
                <h1 className='text-3xl  font-bold mb-2 '>Daily Sales Analytics</h1>
                <p className='text-sm text-slate-400'> Welcome back,what's happening today,Manage daily sales data and generate insights.</p>
            </div>
             
         <div className= 'mx-12  space-y-8 max-w-6xl '>
                {/* <!-- KPI Section --> */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <div
                        className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
                        <div className="flex justify-between items-start  gap-3 mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-500">
                               <PaymentsIcon />
                            </div>
                            <span className="text-emerald-500 text-xs font-bold flex items-center">
                                <span className="material-symbols-outlined text-sm">trending_up</span> 12.5%
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Revenue</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$4,250.00</h3>
                </div>
                <div
                        className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
                        <div className="flex justify-between items-start  gap-3 mb-4">
                            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-500">
                                 <QueryStatsIcon />
                            </div>
                            <span className="text-emerald-500 text-xs font-bold flex items-center">
                                <span className="material-symbols-outlined text-sm">trending_up</span> 5.2%
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Growth %</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">+12.5%</h3>
                </div>
                <div
                        className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                              <LocalGroceryStoreIcon />
                            </div>
                            <span className="text-emerald-500 text-xs font-bold flex items-center">
                                <span className="material-symbols-outlined text-sm">trending_up</span> 8.1%
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Orders</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">142</h3>
                </div>
                <div
                        className="bg-white  p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                <SellIcon />
                            </div>
                            <span className="text-rose-500 text-xs font-bold flex items-center">
                                <span className="material-symbols-outlined text-sm">trending_down</span> 2.4%
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg Order Value</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$29.92</h3>
                </div>
                <div
                        className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                <AccessTimeIcon />
                            </div>
                            <span className="text-slate-400 text-xs font-bold flex items-center">Stable</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Peak Sales Hour</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">04:00 PM</h3>
                </div>
                </div>
        </div>
        </main>
    </div>
  )
}

export default Dailysales
