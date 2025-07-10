import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoot({children, setisRegistered, isRegistered}) {
  const token = localStorage.getItem("token")
  
  if(token.length > 0){
    setisRegistered(true)
  }
  console.log(isRegistered)
  // const auth = false
    return (
    <div>{isRegistered ? <Outlet/> : <Navigate to="/signin" />}</div>
  )
}
