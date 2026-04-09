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
import Courier from './Components/Billing/Courier'
import TempelateDesigner from './Inventory/TempelateDesigner'
import ProtectedRoute from './Components/Dashboard/Form/ProtectedRoute'
import FilterOutWholesaler from './Components/Dashboard/Retailar/Order/WholesalerPages/FilterOutWholesaler'
import WhatsappTempelate from './Inventory/WhatsappTempelate'
import ReturnInvoice from './Inventory/ReturnInvoice'
import AiAgent from './Components/Wholesalecompenent.jsx/Aiagent'
import Retailors from './Inventory/Retailors'
import Inventory from './Inventory/Inventory'
import MixedWholesaler from './Components/Dashboard/Retailar/Order/WholesalerPages/MixedWholesaler'
import OneWholesaler from './Components/Dashboard/Retailar/Order/WholesalerPages/FindWholesaler'
import PendingOrders from './Components/Wholesalecompenent.jsx/PendingOrders'
import ExpiryMedicine from './Components/Wholesalecompenent.jsx/ExpiryMedicine'
import OneMedicine from './Components/Hitesh/OneMedicine'
import Index from "./webpage/Index"
import ActionablePrevention from './Components/Hitesh/ActionablePrevention'
import SingleRetailerDetails from './Components/Hitesh/SingleRetailerDetails'
import AdminRoleAssign from './Components/Dashboard/Retailar/AdminRoleAssign'
import Addstock from './Components/Wholesalecompenent.jsx/Addstock'
import InvoicePurchaseScan from './Components/Billing/InvoicePurchaseScan'
import OrderSuccess from './Components/Billing/OrderSuccess'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Layout = Header + Outlet */}
        <Route path="Dashboard" element={
          <ProtectedRoute >
            <Layout />
          </ProtectedRoute>}> 
          <Route index element={<Navigate to="Retailer" replace />} />
          {/* Default landing page */}
          <Route path='Wholesaler' >  
            <Route index element={<WholeSaler />} />
            <Route path="AdminRoleAssign" element={<AdminRoleAssign />} />
            <Route path="Lowstock" element={<Lowstock />} />
            <Route path="Dailysales" element={<Dailysales />} />
            <Route path="AiAgent" element={<AiAgent />} />
            <Route path="Inventory" element={<Inventory />} />
            <Route path="TempelateDesigner" element={<TempelateDesigner />} />
            <Route path="ProductOverview" element={<ProductOverview />} />
            <Route path="Retailors">
              <Route index element={<Retailors />} />
              <Route path=":id" element={<SingleRetailerDetails />} />
            </Route>
            <Route path="Alert" element={<Actionable />} />
            <Route path="pendingorders" element={<PendingOrders />} />
            <Route path="ExpiryMedicine" element={<ExpiryMedicine />} />
          </Route>
          <Route path="Retailer">
            <Route index element={<Retailer />} />
            <Route path="Inventory" element={<Inventory />} />
            <Route path="Inventory/:id" element={<OneMedicine />} />
          
            <Route path="TempelateDesigner" element={<TempelateDesigner />} />
            <Route path="InvoicePurchaseScan" element={<InvoicePurchaseScan />} />
            <Route path="AiAgent" element={<AiAgent />} />
            <Route path="AddStock" element={<Addstock />} />
            <Route path="WhatsappTempelate" element={<WhatsappTempelate />} />
            <Route path="ReturnInvoice" element={<ReturnInvoice />} />
            <Route path="FilterWholesaler" element={<FilterOutWholesaler />} />
            <Route path="FilterWholesaler" element={<FilterOutWholesaler />} />
            <Route path="ActionablePrevention" element={<ActionablePrevention />} />
            <Route path="Order">
              <Route index element={<OrderWholesaler />} />
              <Route path="FindWholesaler" element={<OneWholesaler />} />
              <Route path="FilterOutWholesaler" element={<FilterOutWholesaler />} />
              <Route path="MixedWholesaler" element={<MixedWholesaler />} />
              <Route path=":id" element={<SingleWholesalerInfo />} />
              {/* ✅ Correct flow */}
              <Route path=":id/Cart" element={<Cart />} />
              <Route path=":id/Billing" element={<Billing />} >
                <Route path="OrderSuccess" element={<OrderSuccess />} />
              </Route>  
            </Route>
            <Route path="Courier" element={<Courier />} />
            <Route path="Connectcourier" element={<Connectcourier />} />
          </Route>
        </Route>
      </Routes>

    </>)
}

export default App
