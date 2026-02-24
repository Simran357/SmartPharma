import React from 'react'
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import { Plus, PlusCircle } from 'lucide-react';
const RetailerSpecification = () => {
    return (
        <>
            <div className='m-2 w-full'>
                <div className='bg-white border shadow  border-slate-200 p-4 m-2  rounded-xl '>

                    <div className='flex flex-col  lg:flex-row lg:items-center gap-4'>

                        {/* Left Title Section */}
                        <div>
                            <h1 className='text-lg md:text-xl font-semibold  text-salte-700'>Requirement Builder</h1>
                            <p className='text-xs md:text-sm text-gray-500 whitespace-nowrap'>Add medicines to find the best wholesaler deals</p>
                        </div>
                        {/* Right Buttons */}
                        <div>
                            <div className='flex  gap-2'>
                                <button className='bg-slate-100 hover:bg-slate-200 transition rounded-lg text-xs md:text-sm flex items-center gap-2 font-medium px-3 text-black  whitespace-nowrap'>
                                    <HistoryIcon fontSize='small' />
                                    Repeat Last Order
                                </button>
                                <button className='bg-gray-100 hover:bg-gray-200 transition rounded-lg flex items-center gap-2 font-medium px-3 py-2 text-xs md:text-sm text-black whitespace-nowrap'>
                                    <HistoryIcon fontSize='small' />
                                    Upload Past Bill
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='mt-2'>
                                <div className='flex item-center  border border-gray-300 rounded-xl px-3 py-2 max-w-full focus-within:ring-2  focus-within:ring-green-500 '>
                                    <SearchIcon className='text-gray-400 mr-2' />
                                    <input
                                        type="text"
                                        placeholder="Search medicines (e.g. Paracetamol, Amoxicillin)..."
                                        className="w-full outline-none text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='mt-2  flex-row flex lg:flex-wrap overflow-x-auto whitespace-nowrap tracking-tighter text-center  gap-2'>
                                <div className='bg-green-50 rounded-full px-3 py-1 border border-green-300 font-medium text-xs text-green-600  md:text-sm '>Generic vs Branded</div>
                                <div className='bg-gray-50 px-3 py-1 border  rounded-full border-gray-300 text-xs font-medium text-gray-600  md:text-sm '>High-Margin</div>
                                <div className='bg-gray-50 px-3 py-1 border rounded-full border-gray-300 text-xs font-medium text-gray-600  md:text-sm '>Form : Tablet</div>
                                <div className='bg-gray-50 px-3 py-1 border  rounded-full border-gray-300 text-xs font-medium text-gray-600  md:text-sm '>Form : Syrup</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}


                <div className='flex items-center justify-between px-2 m-4'>
                    <h1 className='text-sm font-bold uppercase tracking-wider text-slate-500'>CURRENTLY ADDED (4 ITEMS)</h1>
                    <button className='text-sm font-bold text-red-500 hover-underline'>Clear All</button>
                </div>

                <div className='grid sm:grid-cols-2 '>
                    <div className='p-2 m-2'>
                        <div className=' p-6 m-2 bg-white border shadow border-slate-200 rounded-lg grid grid-cols-1 xl:grid-cols-2 gap-2 '>
                            <div className='bg-white p-2 rounded-xl  sm:flex-1  border border-slate-200 shadow-sm '>
                                <div className='flex items-start justify-between'>
                                    <div>
                                        <p className='text-lg font-extrabold '>Paracetamol 500mg</p>
                                        <p className='text-xs text-slate-500'>Salt: Acetaminophen | Cipla Ltd.</p>
                                    </div>
                                    <button className='text-slate-300 hover:text-red-500 transition-colors'>
                                        <span className='material-symbols-outlined'>close</span>
                                    </button>
                                </div>

                                <div className='mt-4'>
                                    <div className='flex gap-2'>
                                        <div className='flex-1'>
                                            <p className='text-[10px] font-bold uppercase text-slate-400'>Quantity</p>
                                            <span className='border border-slate-100 bg-slate-50 flex items-center px-2 rounded-xl py-1 justify-center '>
                                                <button className='size-6 flex items-center justify-center transition-colors hover:bg-slate-100'>-</button>
                                                <input
                                                    className='focus:ring-0 border-none w-full bg-transparent text-center text-sm font-bold  px-2 py-1 '
                                                    type="text" value="24" />
                                                <button className='size-6 transition-colors flex items-center justify-center hover:bg-slate-500 rounded'>+</button>
                                            </span>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-[10px] font-bold text-slate-400 uppercase mb-1'>Dosage</p>
                                            <select className='w-full bg-slate-50 border-slate-100 rounded-lg text-sm font-bold px-2 py-1 focus:ring-0'>
                                                <option>500mg</option>
                                                <option>650mg</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className='flex justify-between'>
                                            <span className='text-[10px] text-green-300 bg-green-100 px-2 py-0.5 rounded font-bold'>High Demand</span>
                                            <span className='text-xs font-bold text-slate-700 '>Est. ₹3,550</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-4 rounded-xl border  sm:flex-1 border-slate-200 shadow-sm flex flex-col gap-3 group hover:border-slate-200 transition-all'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h4 class="font-extrabold text-lg">Amoxicillin CV 625</h4>
                                        <p class="text-xs text-slate-500">Salt: Amoxicillin + Clavulanic Acid</p>
                                    </div>
                                    <button class="text-slate-300 hover:text-red-500 transition-colors">
                                        <span class="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                                <div className='flex justify-between mt-2 gap-4'>
                                    <div className='flex-1'>
                                        <p className='text-[10px] font-bold text-slate-400 uppercase mb-1'>Quantity</p>
                                        <div className='flex items-center justify-center bg-slate-50 rounded-lg px-2 py-1 border border-slate-100 '>
                                            <button className='size-6 flex items-center justify-center hover:bg-slate-200 rounded transition-colors '>-</button>
                                            <input className='w-12 text-center bg-transparent border-none focus:ring-0 text-sm font-bold' type="text" value="24" />
                                            <button className='size-6 flex items-center justify-center hover:bg-slate-200 rounded transition-colors'>+</button>
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-[10px] font-bold text-slate-400 uppercase mb-1'>Dosage</p>
                                        <select className='w-full bg-slate-50 border-slate-100 rounded-lg text-sm font-bold px-2 py-1 focus:ring-0'>
                                            <option>500mg</option>
                                            <option>650mg</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between pt-2 border-t border-slate-100 gap-4'>
                                    <span className='px-2 py-0.5 bg-orange-100 whitespace-nowrap text-orange-600 text-[10px] font-bold rounded'>Low Stock Near You</span>
                                    <span class="text-xs font-bold text-slate-700 whitespace-normal">Est.₹3,550</span>
                                </div>
                            </div>
                            <div className='bg-white p-4 rounded-xl border-l-4 sm:flex-1 border border-green-300/90 shadow-sm flex flex-col gap-3 group hover:border-slate-200 transition-all '>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h1 className='font-extrabold text-lg'>Pantoprazole 40</h1>
                                        <p className='text-xs text-slate-500'>Generic | HealthSource Pharma</p>
                                    </div>
                                    <button className='text-slate-300 hover:text-red-500 transition-colors'>'
                                        <span className='material-symbols-outlined '>close</span>
                                    </button>
                                </div>
                                <div className='flex justify-between gap-4 mt-2 '>
                                    <div className='flex-1'>
                                        <p className='text-[10px] font-bold text-slate-400 uppercase mb-1'>Quantity</p>
                                        <div className='flex items-center justify-center bg-slate-50 rounded-lg px-2 py-1 border border-slate-100 '>
                                            <button className='size-6 flex items-center justify-center hover:bg-slate-200 rounded'>-</button>
                                            <input type="text" value="50" className='bg-transparent w-12 border-none focus:ring-0 text-center text-sm font-bold' />
                                            <button className='hover:bg-slate-200 rounded size-6 flex items-center justify-center'>+</button>
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-[10px] text-slate-400 font-bold uppercase mb-1 '>DOSAGE</p>
                                        <select className='flex w-full bg-slate-50 border border-slate-300 text-sm font-bold rounded px-2 py-1 focus:ring-0'>
                                            <option>500mg</option>
                                            <option>600mg</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-green-600 px-2 py-0.5 text-[10px] bg-green-100 font-bold  rounded'>40% Margin </span>
                                    <span className='text-[10px] font-bold text-slate-700'>Est. ₹2,100</span>
                                </div>
                            </div>
                              <div className='w-full border border-dashed  sm:flex-1  bg-white border-slate-300 text-sm flex  flex-col align-center items-center justify-center font-semibold text-slate-400  text-center h-full p-20 rounded-lg '>
                                    <PlusCircle className='bg-slate-200 rounded-full overflow-hidden' />
                                    <p>Add Another Medicine</p>
                                </div>
                            <div>
                              
                            </div>
                        </div>
                        <div>
                        </div>
                  
                    <div className=' m-2 p-4 bg-white border border-slate-200 rounded-lg flex-1'>
                        <p className='uppercase text-slate-400 mb-4 text-xs font-semibold'>Frequently Ordered</p>
                        <div className='flex gap-2 whitespace-nowrap flex-wrap'>
                            <div className='bg-white border p-4 flex flex-col gap-2 border-slate-100  rounded-xl flex-1'>
                                <span className='bg-slate-50 rounded-lg px-2 text-center py-2 w-12'>ca</span>
                                <p className='text-sm font-bold tracking-wider text-slate-700'>Telmisartan 40mg</p>
                                <p className='text-[10px] text-slate-400'>Cardiology</p>
                                <button className='bg-slate-200 rounded-lg px-2 py-2 font-bold text-xs text-slate-600 text-center'>Add</button>
                            </div>


                            <div className='bg-white border p-4 flex flex-col gap-2 border-slate-100  rounded-xl flex-1'>
                                <span className='bg-slate-50 rounded-lg px-2 text-center py-2 w-12'>ca</span>
                                <p className='text-sm font-bold tracking-wider text-slate-700'>Metformin 500mg</p>
                                <p className='text-[10px] text-slate-400'>Diabetes</p>
                                <button className='bg-slate-200 rounded-lg px-2 py-2 font-bold text-xs text-slate-600 text-center'>Add</button>
                            </div>

                            <div className='bg-white border p-4 flex flex-col gap-2 border-slate-100  rounded-xl flex-1'>
                                <span className='bg-slate-50 rounded-lg px-2 text-center py-2 w-12'>ca</span>
                                <p className='text-sm font-bold tracking-wider text-slate-700'>Cetrizine 10mg</p>
                                <p className='text-[10px] text-slate-400'>Antihistamine</p>
                                <button className='bg-slate-200 rounded-lg px-2 py-2 font-bold text-xs text-slate-600 text-center'>Add</button>
                            </div>
                        </div>
                    </div>
  </div>
                    <div className='p-2 flex-1'>
                        <div className='rounded-xl bg-white/90 border border-slate-200 shadow-xl p-4 mt-4'>
                            <div className='flex gap-2'>
                                <span className='bg-green-400 rounded px-2 py-1 '>..</span>
                                <h2 className='font-bold text-black text-lg tracking-wide'>Margin  Impact</h2>
                            </div>
                            <div className='mt-4'>
                                <p className='text-slate-600 font-bold tracking-wider uppercase text-md'>Potential Net Profit</p>
                                <span className='flex gap-2 items-end'>
                                    <h1 className='text-3xl font-semibold font-mono text-green-400'>₹3,420</h1>
                                    <p className='text-xs font-semibold text-green-600 '>+12% vs last order</p>
                                </span>
                                <div className='mt-4'>
                                    <span className='flex justify-between'>
                                        <p className='text-slate-600 text-md'>Total Est. Cost</p>
                                        <p className='text-slate-600 text-md'>₹8,490</p>
                                    </span>
                                    <span className='flex justify-between mt-2'>
                                        <p className='text-slate-600  text-md'>Est. Retail Value</p>
                                        <p className='text-slate-600 text-md '>₹11,910</p>
                                    </span>
                                    <div className='border border-t-slate-100 w-full mt-2 '></div>
                                    <span className='flex justify-between mt-2'>
                                        <p className='text-slate-600  text-md'>Total Est. Cost</p>
                                        <p className=' text-md text-green-600 font-bold'>₹680</p>
                                    </span>

                                    <div className='mt-4'>
                                        <div><span className='flex justify-between mt-2'>
                                            <p className='text-slate-600  text-sm font-bold'>Profit Margin%</p>
                                            <p className=' text-sm text-green-600 font-bold'>28.7%</p>
                                        </span>
                                            <div className='w-full bg-slate-600 rounded-full h-2 mt-2'>
                                                <div className='bg-green-600 w-60 h-2 overflow-hidden rounded-full'></div>
                                            </div>
                                            <p className='text-slate-400 text-xs text-center mt-2 font-serif'>Optimized for maximum retailer margin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white mt-4 border border-slate-200 shadow rounded-lg'>
                            <div className='p-6'>
                                <h1 className='font-semibold text-sm  tracking-wide'>Optimization Tips</h1>
                                <span className='flex gap-2'>
                                    <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                                    <p className='whitespace-wrap text-sm mt-4 text-slate-600 '>Switch <b>Paracetamol</b> to generic can increase margin by <b>15%</b></p>

                                </span>

                                <span className='flex gap-2'>
                                    <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                                    <p className='whitespace-wrap text-sm mt-4 text-slate-600'>Add 5 more packs of <b>Amoxicillin</b> to tigger wholesale bulk discount.</p>
                                </span>
                            </div>
                        </div>
                        <div className='flex  align-center justify-center'>
                            <button className='bg-green-400 rounded-lg px-4 min-w-full py-4 mt-4  font-bold text-md tra'>Find Best Wholesalers</button>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RetailerSpecification