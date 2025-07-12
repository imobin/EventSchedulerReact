import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoot({children, setisRegistered, isRegistered}) {
  console.log(isRegistered);
  
  // const auth = false
    return (
    <div>{isRegistered ? <Outlet/> : <Navigate to="/signin" />}</div>
  )
}
