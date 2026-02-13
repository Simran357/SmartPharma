import React, { useEffect } from 'react'

const Users = () => {

    useEffect(async ()=>{
        await axios.get("http://localhost:5001/api/registerroute/GetRegisterdata").then((res)=>{
console.log(res)
        }).catch((err)=>{
console.log(err)
res.status(400).json({message:"error in get api"})
        })
    //      console.log(data?.data)
    })
  return (
    <div>Users</div>
  )
}

export default Users