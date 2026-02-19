import React, { useEffect } from 'react'
import axiosInstance from './Utils/AxiosInstance'
import { useState } from 'react'

const Users = () => {
const [user,setUser] = useState()
console.log(user)
  useEffect( () => {
    try{
       axiosInstance.get("/registerroute/GetRegisterdata")
      .then((res) => {
      console.log(res?.data)
      setUser(res?.data?.data)
    }).catch((err)=>{
      console.log("error",err)
         res.status(400).json({ message: "error in get api",err })

    })}
    catch{    
      console.log(err)
      res.status(400).json({ message: "error in get api" })}
},[])
  return (
    <>
  <div>
        {user?.map((items,index)=>{
            return(
                <div key={index} className=''>
                <div className='border mt-2 bg-amber-200'>
                <p>{items?.username}</p>
                    <p>{items?.password}</p>
                </div>
                 

                </div>
            )
        })}
    </div>
    </>
  )
}

export default Users