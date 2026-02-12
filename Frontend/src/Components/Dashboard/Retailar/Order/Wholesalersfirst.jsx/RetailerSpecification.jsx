import React from 'react'
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
const RetailerSpecification = () => {
    return (
        <>
            <div className='bg-white border shadow-xl boorder-gray-600 p-2 m-4 rounded-xl '>
                {/* left */}
                <div className='flex '>
                    <div className=''>
                        <h1 className='text-xl font-semibold whitespace-nowrap text-black'>Requirement Builder</h1>
                        <p className='text-xs text-gray-500'>Add medicines to find the best wholesaler deals</p>
                    </div>
                    <div className='flex flex-col sm:flex-row md:flex-row  gap-2 whitespace-nowrap'>
                        <button className='bg-gray-300/50 rounded-lg flex items-center gap-2 font-medium px-2 text-black text-xs '>
                            <span>
                                <HistoryIcon fontSize='small' /></span>
                            Repeat Last Order
                        </button>
                        <button className='bg-gray-300/50 rounded-lg flex items-center gap-2 font-medium px-2 text-black text-xs '>
                            <span><HistoryIcon fontSize='small' /></span>
                            Upload Past Bill
                        </button>
                        <div className='flex p-2 border border-gray-400  '>
                            <p><SearchIcon /></p>
                            <input className='border-none' />
                        </div>
                        <div className='bg-green-500/8 rounded-xl px-2 border border-green-300 text-sm text-green-600'>Generic vs Branded</div>
                        <div className='bg-gray-300/50 px-2 border rounded-xl border-gray-300 text-sm font-medium text-gray-600'>High-Margin</div>
                        <div className='bg-gray-300/50 px-2 border rounded-xl border-gray-300 text-sm font-medium text-gray-600'>Form : Tablet</div>
                        <div className='bg-gray-300/50 px-2 border rounded-xl border-gray-300 text-sm font-medium text-gray-600'>Form : Syrup</div>
                    </div>
                </div>
                {/* right */}
            </div>
            <div className='mt-5'>
                <h1 className='text-sm font-semibold'>CURRENTLY ADDED (4 ITEMS)</h1>
            </div>
            <section className='bg-white shadow-lg border rounded-xl  border-gray-300 p-4 '>
                <div><h1>Paracetamol 500 mg </h1>
                <p>Salt : Acetaminophen Cipla Ltd.</p></div>
                <span>
                    <p>QUANTITY</p>            
                </span>
            </section>
        </>
    )
}

export default RetailerSpecification