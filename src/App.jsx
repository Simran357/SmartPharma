import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from './Components/Layout'
import Cart from './Components/Cart'
import Billing from './Components/Billing'
import Inventory from './Components/Inventory'
import Retailer from './Components/Dashboard/Retailar/Retailer'
import WholeSaler from './Components/Dashboard/WholeSaler'

const App = () => {
  return (
    <>
    <Routes>
      {/* Layout = Header + Outlet */}
      <Route element={<Layout />}>
        {/* Default landing page */}
        <Route index element={<WholeSaler />} />
        <Route path="Retailer" element={<Retailer/>} />
        <Route path="Inventory" element={<Inventory />} />
        <Route path="Billing" element={<Billing />} />
        <Route path="Cart" element={<Cart/>} />
      
      </Route>
    </Routes>

    
 </> )
}

export default App
