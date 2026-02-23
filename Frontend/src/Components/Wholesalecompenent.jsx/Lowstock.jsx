import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import avocado from "./Pic/OrganicHassAvocados.jpg";
import BoltIcon from '@mui/icons-material/Bolt';
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
                        <div className='flex-1 flex items-center p-3 rounded-lg bg-blue-50 border border-blue-300'>
                            <div className='p-2 bg-blue-100 rounded-full mr-4'>
                                <LocalShippingIcon className="text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Pending Replenishments</p>
                                <p className="text-2xl font-bold text-blue-900 dark:text-blue-200">3</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white  rounded-xl  border  border-slate-200 shadow:sm flex items-center justify-between'>
                        <div>
                            <h3 className='font-semibold  text-slate-900 ml-4'>Auto-Notifications</h3>
                            <p className='text-xs text-slate-500  ml-4'>Alert me for all categories</p>
                        </div>
                        <label className=''>

                        </label>

                    </div>
                </div>
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
                {/* <!-- Inventory Grid: Individual item cards with stock status and replenishment actions --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className='bg-white border  border-slate-200 rounded-xl  p-6 shadow-sm'>
                        <div className='flex  justify-between items-start  mb-4'>
                            <img
                                alt="OrganicHassAvocados"
                                className='w-20 h-20 rounded-lg object-cover bg-slate-100  shrink-0'
                                src={avocado} />

                            <div className='text-right ml-auto'>
                                <div className=' flex items-center text-xs  px-2 py-1  rounded   font-bold bg-orange-100 text-orange-700 uppercase '>
                                    <WarningIcon className='text-[12px] mr-1' /> LOW STOCK
                                </div>
                                <p className="text-[10px] text-slate-400 font-medium">Threshold: 15 cases</p>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-900  text-lg">Organic Hass Avocados</h3>
                        <p className="text-xs text-slate-500 mb-4">Global Organics Ltd. • Category: Produce</p>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-500">Current Stock</span>
                            <span className="font-bold text-orange-600">4 Cases</span>
                        </div>
                        <div className="w-full bg-slate-100  h-2 rounded-full mb-6">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "25px" }}></div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Recommended</p>
                                <p className="font-bold text-slate-900 dark:text-white">20 Cases</p>
                            </div>
                            <button
                                className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold transition-colors">
                                <span className="material-icons-outlined mr-1 text-base">bolt</span> Smart Replenish
                            </button>
                        </div>
                    </div>

                    {/*  second div   */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-start mb-4 ">
                            <img
                                alt="avocado"
                                className="h-20 w-20 rounded-lg"
                                src={avocado} />

                            <div className='ml-auto'>
                                <div className="bg-orange-100 px-2 py-1 rounded-lg text-orange-700 font-bold text-xs  uppercase">
                                    <WarningIcon className='' /> Low Stock
                                </div>
                                <p className='text-[10px] text-right text-slate-400 font-medium mr-1'>Threshold: 15 cases</p>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-900  text-lg">Organic Hass Avocados</h3>
                        <p className="text-xs text-slate-500 mb-4">Global Organics Ltd. • Category: Produce</p>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-500">Current Stock</span>
                            <span className="font-bold text-orange-600">4 Cases</span>
                        </div>
                        <div className='bg-slate-100 w-full  h-2 rounded-full mb-6'>
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "50px" }}></div>
                        </div>

                        <div className='flex items-center pt-4 justify-between border-t border-slate-200'>
                            <div>
                                <p className='text-[10px] font-bold  text-slate-400 uppercase '>Recommended</p>
                                <p className=' font-bold'>20 Cases</p>
                            </div>
                            <button
                                className="inline-flex items-center bg-orange-600   px-4 py-2  hover:bg-orange-700 text-white rounded-lg text-sm font-semibold transition-colors"  >
                                <BoltIcon className='text-white mr-1 text-base' /> Smart Replenish
                            </button>
                        </div>
                    </div>
                    {/* /*  teja div */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-start mb-4 ">
                            <img
                                alt="avocado"
                                className="h-20 w-20 rounded-lg"
                                src={avocado} />

                            <div className='ml-auto'>
                                <div className="bg-orange-100 px-2 py-1 rounded-lg text-orange-700 font-bold text-xs  uppercase">
                                    <WarningIcon className='' /> Low Stock
                                </div>
                                <p className='text-[10px] text-right text-slate-400 font-medium mr-1'>Threshold: 15 cases</p>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-900  text-lg">Organic Hass Avocados</h3>
                        <p className="text-xs text-slate-500 mb-4">Global Organics Ltd. • Category: Produce</p>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-500">Current Stock</span>
                            <span className="font-bold text-orange-600">4 Cases</span>
                        </div>
                        <div className='bg-slate-100 w-full  h-2 rounded-full mb-6'>
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "50px" }}></div>
                        </div>

                        <div className='flex items-center pt-4 justify-between border-t border-slate-200'>
                            <div>
                                <p className='text-[10px] font-bold  text-slate-400 uppercase '>Recommended</p>
                                <p className=' font-bold'>20 Cases</p>
                            </div>
                            <button
                                className="inline-flex items-center bg-orange-600   px-4 py-2  hover:bg-orange-700 text-white rounded-lg text-sm font-semibold transition-colors"  >
                                <BoltIcon className='text-white mr-1 text-base' /> Smart Replenish
                            </button>
                        </div>
                    </div>

                    {/* /*  4th  div */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-start mb-4 ">
                            <img
                                alt="avocado"
                                className="h-20 w-20 rounded-lg"
                                src={avocado} />

                            <div className='ml-auto'>
                                <div className="bg-orange-100 px-2 py-1 rounded-lg text-orange-700 font-bold text-xs  uppercase">
                                    <WarningIcon className='' /> Low Stock
                                </div>
                                <p className='text-[10px] text-right text-slate-400 font-medium mr-1'>Threshold: 15 cases</p>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-900  text-lg">Organic Hass Avocados</h3>
                        <p className="text-xs text-slate-500 mb-4">Global Organics Ltd. • Category: Produce</p>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-500">Current Stock</span>
                            <span className="font-bold text-orange-600">4 Cases</span>
                        </div>
                        <div className='bg-slate-100 w-full  h-2 rounded-full mb-6'>
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "50px" }}></div>
                        </div>

                        <div className='flex items-center pt-4 justify-between border-t border-slate-200'>
                            <div>
                                <p className='text-[10px] font-bold  text-slate-400 uppercase '>Recommended</p>
                                <p className=' font-bold'>20 Cases</p>
                            </div>
                            <button
                                className="inline-flex items-center bg-orange-600   px-4 py-2  hover:bg-orange-700 text-white rounded-lg text-sm font-semibold transition-colors"  >
                                <BoltIcon className='text-white mr-1 text-base' /> Smart Replenish
                            </button>
                        </div>
                    </div>

                   
                </div>
                          {/*   tabless */}
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
                                            Replenished Qty</th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Order ID
                                        </th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Date
                                        </th>
                                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr className="hover:bg-slate-50  transition-colors">
                                        <td class="px-6 py-4 text-sm font-semibold text-slate-900 ">Whole Grain Oats
                                        </td>
                                        <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Pantry</td>
                                        <td class="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">15 Units</td>
                                        <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">#ORD-9021</td>
                                        <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 24, 2023</td>
                                        <td class="px-6 py-4">
                                            <span
                                                class="px-2 py-1 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wider">COMPLETED</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-slate-50  transition-colors">
                                        <td class="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Cold Press Juice
                                        </td>
                                        <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Beverages</td>
                                        <td class="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">40 Bottles</td>
                                        <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">#ORD-8842</td>
                                        <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 22, 2023</td>
                                        <td class="px-6 py-4">
                                            <span
                                                class="px-2 py-1 rounded text-[10px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wider">PROCESSING</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

            </main >
        </div>
    )
}

export default Lowstock
