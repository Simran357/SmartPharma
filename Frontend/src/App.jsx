import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from './Components/Layout'
import Cart from './Components/Cart'
import Billing from './Components/Billing'
import Inventory from './Components/Inventory'
import Retailer from './Components/Dashboard/Retailar/Retailer'
import WholeSaler from './Components/Dashboard/WholeSaler'
import Login from './Components/Dashboard/Form/Login'
import Register from './Components/Dashboard/Form/Registration'
import OrderWholesaler from './Components/Dashboard/Retailar/Order/OrderWholesaler'

import Courier from './Components/Billing/Courier'
import Connectcourier from './Components/Billing/Connectcourier'
import Users from './Components/Dashboard/Form/Users'
import SingleWholesalerInfo from './Components/Dashboard/Retailar/Order/WholesalerPages/SingleWholesalerInfo'

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
        <Route path="Login" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Order" element={<OrderWholesaler/>}/>
        <Route path="Courier" element={<Courier/>}/>
        <Route path="Connectcourier" element={<Connectcourier/>}/>
        <Route path="SingleWholesalerInfo" element={<SingleWholesalerInfo/>}/>

<Route path="Users" element={<Users/>}/>
      </Route>
    </Routes>

    
 </> )
}

export default App
