import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
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



















            </main>

    </div>
  )
}

export default Lowstock
