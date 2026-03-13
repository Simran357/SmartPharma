import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Components/Dashboard/Form/Utils/Layout'
import Cart from './Components/Billing/Cart'
import Billing from './Components/Billing/Billing'
import Retailer from './Components/Dashboard/Retailar/Retailer'
import WholeSaler from './Components/Wholesalecompenent.jsx/WholeSaler'
import Login from './Components/Dashboard/Form/Login'
import Register from './Components/Dashboard/Form/Registration'   
import OrderWholesaler from './Components/Dashboard/Retailar/Order/OrderWholesaler'
import Connectcourier from './Components/Billing/Connectcourier'
import Actionable from './Components/Billing/Alert/Actionable' 
import SingleWholesalerInfo from './Components/Dashboard/Retailar/Order/WholesalerPages/SingleWholesalerInfo'
import Lowstock from './Components/Wholesalecompenent.jsx/Lowstock'
import Dailysales from './Components/Wholesalecompenent.jsx/Dailysales'
import ProductOverview from './Inventory/ProductOverview'
import SingleMedicineInfo from './Inventory/medicine/SingleMedicineInfo'
import Courier from './Components/Billing/Courier'  
import TempelateDesigner from './Inventory/TempelateDesigner'
import ProtectedRoute from './Components/Dashboard/Form/ProtectedRoute'
import FilterOutWholesaler from './Components/Dashboard/Retailar/Order/WholesalerPages/FilterOutWholesaler'
import WhatsappTempelate from './Inventory/WhatsappTempelate'
import ReturnInvoice from './Inventory/ReturnInvoice'
import AiAgent from './Components/Wholesalecompenent.jsx/Aiagent'
import Retailors from './Inventory/Retailors'
import Inventory from './Inventory/Inventory'


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
        {/* Layout = Header + Outlet */}
        <Route path="Dashboard" element={
          <ProtectedRoute >
            <Layout />
          </ProtectedRoute>}>
          <Route index element={<Navigate to="Retailer" replace />} />
          {/* Default landing page */}
          <Route path='Wholesaler' >
            <Route index element={<WholeSaler />}/>
              <Route path="Lowstock" element={<Lowstock />} />
              <Route path="Dailysales" element={<Dailysales />} />
              <Route path="AiAgent" element={<AiAgent />} />
              <Route path="Inventory" element={<Inventory />} />
              <Route path="ProductOverview" element={<ProductOverview />} />
              <Route path="Retailors" element={<Retailors />} />
              <Route path="Alert" element={<Actionable />} />

         

          </Route>
          <Route path="Retailer"  >
            <Route index element={<Retailer />} />
            <Route path="Inventory" element={<Inventory />} />
            <Route path="Billing" element={<Billing />} />
            <Route path="AiAgent" element={<AiAgent />} />
            <Route path="SingleMedicineInfo" element={<SingleMedicineInfo />} />
            <Route path="WhatsappTempelate" element={<WhatsappTempelate />} />
            <Route path="ReturnInvoice" element={<ReturnInvoice />} />
            <Route path="TempelateDesigner" element={<TempelateDesigner />} />
            <Route path="Cart" element={<Cart />} />
             <Route path="FilterWholesaler" element={<FilterOutWholesaler />} />

            <Route path="Order">
              <Route index element={<OrderWholesaler />} />
              <Route path=":id" element={<SingleWholesalerInfo />} />
            </Route>
            <Route path="Courier" element={<Courier />} />
            <Route path="Connectcourier" element={<Connectcourier />} />
          </Route>
        </Route>
      </Routes>

    </>)
}

export default App
