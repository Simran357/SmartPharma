import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Retailerlayout from "./Retailerlayout";
import Wholesalerlayout from "./WholesalerLayout";
import axiosInstance from "./AxiosInstance";
import Header from "./Header";

export default function Layout() {

  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
console.log("ROLE:", role)
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
switch(role){
  case 'Admin':
    return <>
      <Header/>
      <Outlet/>
    </>
  case 'Wholesaler':
    return (
      <Wholesalerlayout>
        <Outlet />
      </Wholesalerlayout>
    )

  case 'Retailer':
    return (
      <Retailerlayout>
        <Outlet />
      </Retailerlayout>
    )

  default:
    return <div>Unauthorized</div>
}
}