import React from 'react'
import { ShoppingBag, AddShoppingCart, LocalShipping,CurrencyRupee } from '@mui/icons-material';
import { Checkbox } from 'antd';
const SingleWholesalerInfo = () => {
  return (
    <>
      <div className='m-6'>
        <div className='bg-white border shadow-xl  border-gray-400 p-6 rounded-xl  ' >
          <div className='flex gap-2'>
            <span className='flex flex-row items-center gap-2'>
              <span className='text-green-900/90  rounded-xl bg-green-200/80 p-6'>
                <LocalShipping fontSize='medium' />
              </span>
              <div className='flex flex-col items-center gap-2'>
                <span className='flex flex-row items-center gap-2'>
                  <h1 className='font-bold text-xl'>Global Pharma Distro</h1>
                  <p className=' bg-green-200/80 px-1 text-xs rounded-2xl text-green-700/90 uppercase '>verified</p>
                </span>
                <p className='text-sm font-medium text-gray-700 '>License # 12345-BA Established 2008 </p>

              </div>
            </span>
          </div>

          <div className='flex flex-row gap-2 ml-4 mt-4'>
            <div className='flex flex-row gap-8'>
              <span className='flex flex-col items-center'>
                <h1 className='font-bold text-xl '>98%</h1>
                <p className='text-xs text-gray-700 '>DELIVERY RATE</p>
              </span>
              <span className='flex flex-col items-center'>
                <h1 className='font-bold text-xl '>3.5h</h1>
                <p className='text-xs text-gray-700 '>AVG . TIME </p>
              </span>
              <span className='flex flex-col items-center'>
                <button className='text-black font-bold text-md bg-green-700/80 shadow-2xl shadow-green-700/60 px-4 py-2 rounded-xl '>
                  <AddShoppingCart />
                  Procure Now</button>
              </span>
            </div>
          </div>

        </div>
        <div className='flex flex-col sm:flex-row justify-between '>
        <section className='bg-white border mt-8 shadow-xl max-h-fit max-w-80 border-gray-400 p-6 rounded-xl '>
          <span className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>Filters</h1>
            <p className='text-green-500 text-sm font-semibold'>Clear All</p>
          </span>
          <span className=''>
            <h1 className='text-gray-500 font-bold text-sm mt-2'>BATCH SEARCH</h1>
            <input className='borde-none bg-gray-300 font-bold  py-1 px-2 rounded-xl mt-2 '
              placeholder='Enter Batch No.'
            />
          </span>

          <div className=' mt-4 '>
            <h1 className='font-bold text-sm text-gray-500 '>CATEGORY </h1>
            <input className='borde-none bg-gray-300  font-bold  py-1 px-2 rounded-xl mb-2 mt-2'
              placeholder='Enter Batch No.'
            />
            <span className='flex flex-col font-bold text-gray-800 gap-2'>
              <Checkbox>Syrups</Checkbox>
              <Checkbox>Capsules</Checkbox>
              <Checkbox>Tablets</Checkbox>
              <Checkbox>Injectables</Checkbox>
            </span>
          </div>

          <div className='flex mt-4 flex-col font-bold text-gray-800 gap-2'>
            <h1 className='font-bold text-sm text-gray-500'>COMPANY</h1>
            <Checkbox>GSK</Checkbox>
            <Checkbox>Pfizer</Checkbox>
            <Checkbox>Abbott</Checkbox>
            <Checkbox>Cipla</Checkbox>
            <Checkbox>Sun Pharma</Checkbox>
          </div>

          <div className='mt-4'>
            <h1 className='text-gray-400 font-bold'>SALT COMPOSITION</h1>
            <div className='grid grid-cols-2 gap-4'>
              <span className='bg-gray-500/80 rounded px-2 py-1 text-xs font-bold text-gray-700'>Amoxillin</span>
              <span className='bg-gray-500/80 rounded px-2 py-1 text-xs font-bold text-gray-700'>Paracetamol</span>
              <span className='bg-gray-500/80 rounded px-2 py-1 text-xs font-bold text-gray-700'>Metformin</span>
              <span className='bg-gray-500/80 rounded px-2 py-1 text-xs font-bold text-gray-700'>Atorvastatin</span>
            </div>
          </div>
        </section>
        <section className='bg-white border shadow-xl w-full  mt-8 border-gray-400 p-6 rounded-xl'>
          <div className='flex justify-between items-center'>
            <span className='flex gap-2'>
              <ShoppingBag fontSize='medium' />
            <p className='text-md font-bold '>MY CART</p>
            </span>
            <span className='bg-green-300/90  text-green-800/80 text-xs font-medium rounded-2xl px-2'>3 Items</span>
          </div>

          <div className='mt-4'>
            <div className='flex gap-2 items-center'>
              <div className='w-12 h-12 rounded-xl p-2 bg-linear-to-t from-amber-500 to-cyan-700'></div>
               <div className='flex justify-between'>
               <span className='flex flex-col '>
                <h1 className='text-sm font-bold '>Amocxicillin 500mg</h1>
               <p className='text-gray-400 text-sm'>Qty: 500 Units</p> 
                </span>
                <span>
                <span className='text-sm items-center flex'>
                  <CurrencyRupee fontSize='small'/> 7,250</span>
                </span>
            </div>
            </div> 
          </div>
          
        </section>
        </div>

        <section className='bg-white border shadow-xl flex items-start mt-4 justify-end border-gray-400 p-30 rounded-xl'></section>

      </div>
    </>
  )
}

export default SingleWholesalerInfo