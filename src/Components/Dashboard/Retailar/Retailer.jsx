import React from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InventoryIcon from '@mui/icons-material/Inventory';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Upload } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MedicineSalesChart from './SubComponent/MedicineSalesChart';
export const stats = [
  {
    id: 1,
    title: "Today's Sales",
    icon: <CurrencyRupeeIcon />,
    value: "4,250",
    change: "+5.2%",
    border: "hover:border-green-500",
    disc: "Total revenue from 142 orders"
  },
  {
    id: 2,
    title: "Today's Profit",
    icon: <TrendingUpIcon />,
    value: "8,420",
    change: "17.5%",
    disc: "Net margin after tax & cost",
    border: "hover:border-yellow-500"
  },
  {
    id: 3,
    title: "Total Stock Value",
    icon: <InventoryIcon />,
    value: "12.4L",
    change: "Net",
    disc: "Valuation of 2,450 unique SKUs",
    border: "hover:border-green-500",


  },
  {
    id: 4,
    title: "Low Stock",
    icon: <WarningAmberIcon />,
    value: "24 Items",
    disc: "Items below safety threshold",
    iconBg: "text-yellow-400",
    border: "hover:border-yellow-500",
  },
  {
    id: 6,
    title: "Near Expiry",
    icon: <EventBusyIcon />,
    value: "08 Items",
    change: "30 Days",
    disc: "Immediate action required",
    border: "hover:border-red-500",
    iconBg: "text-red-600"


  },
  {
    id: 5,
    title: "Pending Bills",
    icon: <ReceiptLongIcon />,
    value: "64K",
    change: "Due: 4",
    disc: "Outstanding supplier payments",
    border: "hover:border-red-500",
    iconBg: "text-red-600"
  },
];
const Retailer = () => {


  return (
    <>
      <div className=''>
        <section className="mt-6">
          <div className="grid gap-4  grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 p-6">
            {stats.map((item, i) => (
              <div
                key={i}  
                className={`rounded-xl bg-white p-2 flex flex-col justify-between border border-gray-200
 
  ${item.border} 
  hover:scale-[1.02] transition-all duration-200`}              >
                <div className="flex justify-between items-center ">
                  <span className={`text-black  ${item.iconBg} uppercase text-xs font-semibold`}>
                    {item.title}
                  </span>
                  <span className={` rounded-lg text-green-600  ${item.iconBg} p-2`}>
                    {item.icon}</span>

                </div>

                <div className={`flex items-end ${item.iconBg} justify-between mt-2`}>
                  <h1 className='font-bold   text-xl'>
                    {item.value}
                  </h1>
                  <span className={`text-sm   ${item.iconBg}   text-green-700  px-2 py-1 rounded-full`}>
                    {item.change}
                  </span>

                </div>
                <span className={`text-xs mt-2 whitespace-nowrap  ${item.iconBg} font-50% text-gray-600 `}>
                  {item.disc}
                </span>
              </div>
            ))}
          </div>
        </section>
  
        <section className='grid grid-cols-1 sm:grid-cols-3'>

        <section className="rounded-2xl bg-white p-4 border border-gray-200 m-6">
          <div className='flex flex-row justify-between'>
            <div className='flex gap-2'>
              <span className='text-green-500'>
                <TrendingUpIcon />
              </span>
              <h1 className='text-xl font-medium'>SALES TREND</h1>
            </div>
            <div className='flex  gap-2'>
              <button className='rounded-xl px-2 bg-green-400 text-green-200 text-xs font-light   hover:border-green-600 hover:shadow-md hover:bg-green-800 transition-all'> Sales</button>
              <button className='rounded-xl px-2 bg-gray-400 text-gray-600 text-xs font-light   hover:border-gray-600 hover:shadow-md hover:bg-gray-300 transition-all'>Profit</button>
            </div>
          </div>
          <div className='w-full max-w-lg'>
            <MedicineSalesChart />
          </div>
          <hr className='text-gray-300' />
          <div className='mt-4 flex justify-between'>
            <span className='flex flex-row gap-2 items-center'>
              <h1 className='text-gray-600 text-xs'>Avg Margin</h1>
              <p className='text-green-600 text-xs font-medium'>22.4%</p></span>
            <span className=''><button className='bg-green-500 p-2 rounded-xl text-xs text-green-200 font-medium'>Best: Dolo 650</button></span>
          </div>

        </section>

          <section className='bg-white border border-gray-200 rounded-xl p-4 m-6'>
            <div className='flex flex-row justify-between  mb-6 items-center'>
              <span className='flex flex-row gap-2'>
                <AssignmentTurnedInIcon className='text-amber-600' />
                <h1 className='text-lg font-medium  text-gray-800'>INVENTORY PULSE</h1>
              </span>
              <button className='text-green-500 underline text-sm font-semibold cursor-pointer'>Auto-Reorder</button>

            </div>
            <div className='grid grid-cols-2 gap-6 relative'>
              <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200">
              </div>
              <div className="flex flex-col justify-between text-sm mb-2">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">In Stock</span>
                    <span className="text-green-600 font-semibold">82%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: "82%" }}
                    />
                  </div>
                </div>
                <div className='mt-4'>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">Low Stock</span>
                    <span className="text-amber-500 font-semibold">12%</span>
                  </div>
                  <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                    <div className='h-full bg-amber-400'
                      style={{ width: "12%" }}>
                    </div>
                  </div>
                </div>
              </div>

              <div className=''>
                <h4 className="text-xs font-semibold text-gray-500">
                  EXPIRY RADAR
                </h4>
                <div className="flex items-center mt-2 justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className='font-semibold'>&lt; 30d</span>
                  </div>
                  <span className="font-semibold text-gray-800">08</span>
                </div>
                <div className='mt-8'>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-300"></span>
                      <span className='font-semibold'>&lt; 30d - 90d</span>
                    </div>
                    <span className="font-semibold text-amber-600">42</span>
                  </div>
                </div>
              </div>

            </div>
          </section>
 <section className="rounded-2xl bg-white p-4 m-6 border border-gray-200">
                <span className='text-xs font-bold text-gray-400'>COMMAND CENTER  ACTIONS</span>

            <div className="grid grid-cols-2 gap-6 mt-2">
              {/* NEW BILL */}
              <button className="group rounded-2xl border border-green-200 bg-grey-50 p-6
      flex flex-col items-center justify-center gap-2
      hover:border-green-600 hover:shadow-lg hover:bg-green-50 transition-all">
                <div className="w-14 h-14 rounded-full  text-green-700
        flex items-center justify-center text-xl">
                  <ReceiptLongIcon />
                </div>
                <span className="font-semibold text-green-700">NEW BILL</span>
                <span className="text-xs text-gray-500">(F1)</span>
              </button>

              {/* CREATE ORDER */}
              <button className="group rounded-2xl border border-green-200 bg-grey-50  p-6
      flex flex-col items-center justify-center gap-2
      hover:border-green-600 hover:shadow-lg hover:bg-green-50 transition-all">
                <div className="w-14 h-14 rounded-full  text-green-700
        flex items-center justify-center text-xl">
                  <AddShoppingCartIcon />
                </div>
                <span className="font-semibold text-green-700">CREATE ORDER</span>
              </button>
              <button className="group rounded-2xl border border-green-200 bg-grey-50 p-6
      flex flex-col items-center justify-center gap-2
      hover:border-green-600 hover:shadow-lg  hover:bg-green-50 transition-all">
                <div className="w-14 h-14 rounded-full  text-green-700
        flex items-center justify-center text-xl">
                  <Upload />
                </div>
                <span className="font-semibold text-green-700">UPLOAD PURCHASE</span>
              </button>

              {/* REPORT HUB */}
              <button className="group rounded-2xl border border-green-200 bg-grey-50 p-6
      flex flex-col items-center justify-center gap-2
      hover:border-green-600 hover:shadow-lg hover:bg-green-50 transition-all">

                <div className="w-14 h-14 rounded-full  text-green-700
        flex items-center justify-center text-xl">
                  <AssessmentIcon />
                </div>

                <span className="font-semibold text-green-700">REPORT HUB</span>
              </button>

            </div>
          </section>
     
  </section>
  <section className='grid grid-cols '>
       <section className='bg-green-50 border border-green-200 rounded-xl p-4 m-6'>
        <div className='flex flex-row gap-2 items-center justify-between'>
          <span className='flex gap-2  items-center text-green-400'>
            <AutoAwesomeIcon/>
            <h4 className='text-md font-semibold'>SMART ORDER SUGGESTIONS</h4>
          </span>
                 <div className='flex gap-2'>
          <button className='rounded-lg bg-green-400 p-2 text-green-50'>OPTIMIZED</button>
          <button className='text-green-500 underline text-sm font-semibold cursor-pointer'>View Comparison</button>
          </div>
        </div>
        <div className=''>       
          
          <section className='bg-white rounded-lg p-4 m-6'>

          <div>
           <div >
            <h1 className='text-lg font-normal'>Paracetamol 500mg (Strip of 10)</h1>
            <div className='flex sm:flex-row flex-col justify-between  gap-2'>
             <div className='flex flex-row sm:flex-col gap-2'>
              <span className='text-xs font-medium text-gray-400'>Order :
           <span className='text-gray-600 font-bold text-[12px]'> 12 Strips</span> </span>
            <span className='text-gray-400 font-medium text-[12px]'>Best Wholesaler :
           <span className='text-green-400 text-xs rounded-full whitespace-nowrap'> ABC Pharma</span></span>
         </div> 
           <div className='flex gap-2'>
            <span className='text-xs flex flex-col text-green-400 font-medium'>
              <span>25% Margin</span>
            <span className='text-gray-500 text-xs'>Avg Sale 4/day</span></span>
            <div className='bg-green-600 px-0.5  text-green-100 rounded-lg'><AddShoppingCartIcon/></div>
           </div>
  </div>
           </div>
          </div>
          <div></div>
         
          </section>
        </div>

       </section>
       
       </section>
      </div>


    </>
  )
}

export default Retailer