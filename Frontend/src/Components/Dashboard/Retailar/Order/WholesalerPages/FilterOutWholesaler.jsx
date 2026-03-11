import { CurrencyRupeeOutlined } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react';

const FilterOutWholesaler = () => {
       const [activeTab, setActiveTab] = useState("wholesaler");
    
  return (
    <>
    
    <div>
        <div className='bg-slate-100 h-screen p-4 md:8'>
            <div className='flex items-center justify-between md:flex-row flex-col'>
                <div>
            <h1 className='text-2xl font-bold tracking-wide whitespace-nowrap'>Smart Wholesaler Selection</h1>
            <span className='text-slate-400 text-xs '>Optimize your fulfillment based on margin , availabilty, and speed.</span>
         </div>
            <div>
                <div className='flex gap-2'>
                <div className='bg-white border border-slate-200 rounded-lg p-2 '>
                    <h1 className='text-slate-400 text-xs'>Order Value</h1>
                    <span className='font-bold text-lg flex items-center'><CurrencyRupeeOutlined fontSize='small'/> 12,450.00</span>
                </div>
                  <div className='bg-white border border-slate-200 rounded-lg p-2 '>
                    <h1 className='text-slate-400 text-xs'>Order Value</h1>
                    <span className='font-bold text-lg flex items-center'><CurrencyRupeeOutlined fontSize='small'/> 12,450.00</span>
                </div>
                  <div className='bg-white border border-slate-200 rounded-lg p-2 '>
                    <h1 className='text-slate-400 text-xs'>Order Value</h1>
                    <span className='font-bold text-lg flex items-center'><CurrencyRupeeOutlined fontSize='small'/> 12,450.00</span>
                </div>
                </div>
                   </div>
            </div>

                <div className="flex gap-6 border-b border-gray-200">        
        <button onClick={() => setActiveTab("wholesaler")}
          className={`pb-3 text-sm font-medium transition-all relative
            ${
              activeTab === "wholesaler"
                ? "text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Wholesaler-First

          {activeTab === "wholesaler" && (
            <span className="absolute left-0 bottom-0 h-3px w-full bg-green-500 rounded-full"></span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("requirement")}
          className={`pb-3 text-sm font-medium transition-all relative
            ${
              activeTab === "requirement"
                ? "text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Requirement-First
          {activeTab === "requirement" && (
            <span className="absolute left-0 bottom-0 h-[3] w-full bg-green-500 rounded-full"></span>
          )}
        </button>
      </div>

        </div>
    </div>
    </>
  )
}

export default FilterOutWholesaler