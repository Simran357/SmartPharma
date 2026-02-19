import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const Lowstock = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* /-- Main Dashboard Container - / */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
                {/* <!-- Dashboard Header: Title and Primary Action --> */}
                <div className='flex flex-col md:flex-row  md:items-center justify-between gap-6 mb-8'>
                    <div>
                        <h1 className='text-3xl font-bold text-slate-900 dark:text-white mb-2'>Low Stock Inventory Alerts</h1>
                        <p className="text-slate-500 dark:text-slate-400">Manage items that are below your threshold and replenish
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
                {/* Summary Cards: Low Stock Stats and Toggle Settings */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 '>
                    <div className='lg:col-span-2 flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm'>
                        <div className='flex-1 flex items-center p-3 rounded-lg bg-orange-50 border border-orange-100'>
                            <div className='bg-orange-100 p-2  rounded-full mr-4'>
                                <WarningIcon className=' text-orange-600' />
                            </div>
                            <div >
                                <p className='text-sm font-medium text-orange-800'>Total Low Stock Items</p>
                                <p className='text-2xl font-bold text-orange-900'>12</p>
                            </div>
                        </div>
                        <div className='flex-1 flex items-center p-3 rounded-lg bg-blue-50 border-blue-400'>
                            <div className='p-2 bg-blue-100 rounded-full mr-4'>
                                <LocalShippingIcon className="text-blue-600" />
                            </div>
                            <div>
                                <p class="text-sm font-medium text-blue-800 dark:text-blue-300">Pending Replenishments</p>
                                <p class="text-2xl font-bold text-blue-900 dark:text-blue-200">3</p>
                            </div>
                        </div>
                    </div>
                       <div className='bg-white  rounded-xl  border  border-slate-200 shadow:sm flex items-center justify-between'>
                         <div>
                            <h3 className='font-semibold  text-slate-900'>Auto-Notifications</h3>
                            <p className='text-xs text-slate-500 '>Alert me for all categories</p>
                         </div>
                        <label className=''>

                        </label>

                       </div>
                    <div>
                 {/* <!-- Category Filters: Quickly sort through different item types --> */}
                <div className='flex flex-wrap gap-1 mb-8'>
                    <button className='px-4 py-2  bg-slate-900 text-white rounded-full  text-sm font-medium'>
                        All Items</button>
                     <button className='px-4 py-2  bg-white text-slate-600 rounded-full  border border-slate-200 hover:border-slate-300 text-sm font-medium transition-colors'>
                        Produce</button>    
                     <button className='px-4 py-2 bg-white text-slate-600 rounded-full border border-slate-200 hover:border-slate-300 text-sm font-medium transition-colors'>
                        Beverages</button>
                     <button className='px-4 py-2  bg-white text-slate-600 rounded-full border border-slate-200 hover:border-slate-300 text-sm font-medium transition-colors'>
                        Packaging</button>    
                </div>
                    
                 </div>
                </div>
         </main>
     </div>
    )
}

export default Lowstock
