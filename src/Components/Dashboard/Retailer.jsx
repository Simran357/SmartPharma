import React from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InventoryIcon from '@mui/icons-material/Inventory';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
export const stats = [
  {
    id: 1,
    title: "Today's Sales",
    icon: <CurrencyRupeeIcon />,
    value: "4,250",
    change: "+5.2%",
    border: "hover:border-green-500",
    disc:"Total revenue from 142 orders"
  },
  {
    id: 2,
    title: "Today's Profit",
    icon: <TrendingUpIcon />,
    value: "8,420",
    change: "17.5%",
   disc:"Net margin after tax & cost",
   border: "hover:border-yellow-500"
  },
  {
    id: 3,
    title: "Total Stock Value",
      icon: <InventoryIcon />,
    value: "12.4L",
    change: "Net",
    disc:"Valuation of 2,450 unique SKUs",
     border: "hover:border-green-500",
  
   
  },
  {
    id: 4,
    title: "Low Stock",
    icon: <WarningAmberIcon />,
    value: "24 Items",
    disc:"Items below safety threshold",
iconBg: "text-yellow-400",
     border: "hover:border-yellow-500",
  },
    {
    id: 6,
    title: "Near Expiry",
    icon: <EventBusyIcon />,
    value: "08 Items",
    change:"30 Days",
    disc:"Immediate action required",
 border: "hover:border-red-500",
 iconBg: "text-red-600"


  },
     {
    id: 5,
    title: "Pending Bills",
    icon: <ReceiptLongIcon />,
    value: "64K",
    change:"Due: 4",
    disc:"Outstanding supplier payments",
   border: "hover:border-red-500",
iconBg: "text-red-600"
  },
];
const Retailer = () => {


  return (
 <>
 <div>
<section className="mt-6 bg-slate-50 rounded-2xl mx-6">
          <div className="grid gap-4  grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 p-6">
            {stats.map((item, i) => (
              <div
                key={i}
 className={`rounded-xl bg-white p-4 min-w-20 min-h-[100] 
  flex flex-col justify-between 
  border border-transparent 
 
  ${item.border}
  hover:scale-[1.02] transition-all duration-200`}              >
                <div className="flex justify-between items-center ">
                   <span className={ `text-black  ${item.iconBg} uppercase text-lg font-semibold`}>
                    {item.title}
                  </span>
                  <span className={` rounded-lg text-green-600  ${item.iconBg} p-2`}>
                    {item.icon}</span>
                  
                </div>

                <div className={`flex items-end ${item.iconBg} justify-between mt-2`}>
                   <h1 className='font-bold   text-3xl'>
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
<section className="mx-6 mt-6 bg-amber-100 rounded-2xl">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow">
 <button className="bg-green-600 text-white p-4 rounded-xl flex items-center justify-center font-semibold hover:bg-green-700">
  NEW BILL (F1)
</button>

<button className="bg-green-600 text-white p-4 rounded-xl flex items-center justify-center font-semibold hover:bg-green-700">
  CREATE ORDER
</button>

<button className="bg-green-600 text-white p-4 rounded-xl flex items-center justify-center font-semibold hover:bg-green-700">
  UPLOAD PURCHASE
</button>

<button className="bg-green-600 text-white p-4 rounded-xl flex items-center justify-center font-semibold hover:bg-green-700">
  REPORT HUB
</button>

</div>

</section>
<section></section>


 </div>
 
 
 </>
  )
}

export default Retailer