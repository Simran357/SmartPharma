import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Cart from './Components/Cart'
import Billing from './Components/Billing'
import Inventory from './Components/Inventory'
import Retailer from './Components/Dashboard/Retailar/Retailer'
import WholeSaler from './Components/Dashboard/WholeSaler'
import Login from './Components/Dashboard/Form/Login'
import Register from './Components/Dashboard/Form/Registration'
import OrderWholesaler from './Components/Dashboard/Retailar/Order/OrderWholesaler'
import Connectcourier from './Components/Billing/Connectcourier'
import Actionable from './Components/Billing/Alert.jsx/Actionable'
import SingleWholesalerInfo from './Components/Dashboard/Retailar/Order/WholesalerPages/SingleWholesalerInfo'
import Lowstock from './Components/Wholesalecompenent.jsx/Lowstock'
import Dailysales from './Components/Wholesalecompenent.jsx/Dailysales'
import ProductOverview from './Inventory/ProductOverview'
import SingleMedicineInfo from './Inventory/medicine/SingleMedicineInfo'
import Courier from './Components/Billing/Courier'
import Users from './Components/Dashboard/Form/Users'
import TempelateDesigner from './Inventory/TempelateDesigner'
import ProtectedRoute from './Components/Dashboard/Form/ProtectedRoute'
import FilterOutWholesaler from './Components/Dashboard/Retailar/Order/WholesalerPages/FilterOutWholesaler'
import WhatsappTempelate from './Inventory/WhatsappTempelate'
import ReturnInvoice from './Inventory/ReturnInvoice'
import AiAgent from './Components/Wholesalecompenent.jsx/Aiagent'
import Retailors from './Inventory/Retailors'
const App = () => {

  return (
    <> 
    <Routes>
      <Route path="/" element={<Login/>}/>
      
        <Route path="Register" element={<Register/>}/>
        {/* Layout = Header + Outlet */}
        <Route element={<Layout />}>
          {/* Default landing page */}
          <Route index element={<WholeSaler />} />
          <Route path="Retailer" element={<Retailer />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Billing" element={<Billing />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Order" element={<OrderWholesaler />} />
          <Route path="Courier" element={<Courier />} />
          <Route path="Connectcourier" element={<Connectcourier />} />
          <Route path="TempelateDesigner" element={<TempelateDesigner />} />
          <Route path="ProductOverview" element={<ProductOverview />} />
          <Route path="SingleMedicineInfo" element={<SingleMedicineInfo />} />
          <Route path="SingleWholesalerInfo" element={<SingleWholesalerInfo/>}/>
          <Route path="WhatsappTempelate" element={<WhatsappTempelate />} />
          <Route path="ReturnInvoice" element={<ReturnInvoice />} />
          <Route path="Retailors" element={<Retailors />} />
          <Route path="AiAgent" element={<AiAgent />} />
        <Route path="Alert" element={<Actionable/>}/>
        <Route path="/lowstock" element={<Lowstock/>} />
        <Route path="/dailysales" element={<Dailysales/>} />
          <Route path="filterWholesaler" element={<FilterOutWholesaler/>} />
          <Route path="Retailer" element={<Retailer/>} />
          <Route path="Users" element={
            <ProtectedRoute >
              <Users />
            </ProtectedRoute>
          } />


        </Route>
      </Routes>


    </>)
}

export default App
