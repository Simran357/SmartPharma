import React from 'react'
import adminImg from '../assets/admin.jpg'
// import retailerImg from "../assets/retailer-panel.jpg";
// import wholesalerImg from "../assets/wholesaler-panel.jpg";
const RolePanel = () => {
  const panels = [
  {
    title: "Admin Dashboard",
    desc: "Analytics, risk scoring, expiry alerts & system-wide reports.",
    img: adminImg,
  },
  {
    title: "Retailer Panel",
    desc: "Smart billing with FEFO auto-selection & real-time stock.",
    // img: retailerImg,
  },
  {
    title: "Wholesaler Panel",
    desc: "Stock supply tracking, purchase orders & distribution insights.",
    // img: wholesalerImg,
  },
];
  return (
    <>
    <div>
    <div className='text-center max-w-2xl mx-auto mb-14'>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Role-Based Access</h1>
            <p className='text-sm text-muted-foreground whitespace-nowrap'>Tailored dashboards for Admins, Retailers & Wholesalers.</p>
        <div className='bg-white rounded-2xl shadow-xl border-slate-100 flex flex-col items-center  p-4 mt-4'>
             <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-black whitespace-nowrap'>Admin Dashboard</h1>
        <p className='text-slate-400 text-md'>Analytics, risk scoring, expiry alerts & system-wide reports.</p>
       </div> 
            <div className='bg-pink-800 shadow  rounded-xl'>
            <img className='bg-cover' src={adminImg} alt={adminImg}/>
        </div>
     </div>
    </div>
      </div>
    </>
  )
}

export default RolePanel