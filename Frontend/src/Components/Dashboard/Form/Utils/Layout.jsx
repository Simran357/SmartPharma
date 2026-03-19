import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Retailerlayout from "./Retailerlayout";
import Wholesalerlayout from "./WholesalerLayout";
import axiosInstance from "./AxiosInstance";
import Header from "./Header";

export default function Layout() {

  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
console.log("ROLE:", role)
const location = useLocation()
useEffect(() => {
  axiosInstance.get("/registerroute/me")
    .then(res => {
      setRole(res?.data?.user?.role);
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      setLoading(false);
    });

}, []);

  if (loading) {
    return <div>Loading...</div>;
  }

   if (location.pathname === "/Dashboard") {

    if (role === "Retailer") {
      return <Navigate to="/Dashboard/Retailer" replace />
    }

    if (role === "Wholesaler") {
      return <Navigate to="/Dashboard/Wholesaler" replace />
    }

  }

switch(role){
  case 'Admin':
    return <>
      <Header/>
      <Outlet/>
    </>
  case 'Wholesaler':
    return (
      <Wholesalerlayout/>
       
    )

  case 'Retailer':
    return (
      <Retailerlayout/>
     
    )

  default:
    return <div>Unauthorized</div>
}
}