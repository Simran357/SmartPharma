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
import TempelateDesigner from './Inventory/TempelateDesigner'
import ProductOverview from './Inventory/ProductOverview'
import SingleMedicineInfo from './Inventory/medicine/SingleMedicineInfo'


import Actionable from './Components/Billing/Alert.jsx/Actionable'
import SingleWholesalerInfo from './Components/Dashboard/Retailar/Order/WholesalerPages/SingleWholesalerInfo'
import Lowstock from './Components/Wholesalecompenent.jsx/Lowstock'
import ProtectedRoute from './Components/Dashboard/Form/ProtectedRoute'

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
<Route path="TempelateDesigner" element={<TempelateDesigner/>}/>
<Route path="ProductOverview" element={<ProductOverview/>}/>
<Route path="Users" element={<Users/>}/>
<Route path="SingleMedicineInfo" element={<SingleMedicineInfo/>}/>


         <Route path="Alert" element={<Actionable/>}/>
        <Route path="SingleWholesalerInfo" element={<SingleWholesalerInfo/>}/>
        <Route path="Users" element={
          <ProtectedRoute >
          <Users />
          </ProtectedRoute>
          }/>
        <Route path="/lowstock" element={<Lowstock/>} />
  

      </Route>
    </Routes>

    
 </> )
}

export default App
