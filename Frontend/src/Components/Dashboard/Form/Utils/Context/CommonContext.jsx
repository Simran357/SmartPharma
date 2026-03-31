import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../AxiosInstance'

export const contextProvide = createContext()
const CommonContext = ({ children }) => { 
  const [auth, setAuth] = useState("")
  const [userRoles,setUserRoles] = useState("")

   

    console.log("auth",auth)
     
      useEffect(() => {
    axiosInstance.get("/registerroute/me")
      .then((res) => {
        setAuth(res?.data?.user?.userId);
        setUserRoles(res?.data?.user?.role)
    console.log("FULL RESPONSE:", res);
console.log("USER:", res?.data?.user);
const token = res?.data?.user?.userId
setRoles(res?.data?.user?.role)

       
if (token) {

  console.log("mast decoded value",token);
  setAuth(token)
}
      })  
      .catch(() => {
      console.log("ds")
      });
  }, []);

   return (
    <contextProvide.Provider value={{auth ,setAuth, userRoles, setUserRoles}}>
      {children}
    </contextProvide.Provider>
  )
}
export default CommonContext