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
    <div>Retailer</div>
  )
}

export default Retailer
