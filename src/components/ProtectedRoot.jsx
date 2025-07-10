import React from 'react'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoot({children}) {
  const auth = false
    return (
    <div>{auth ? <Outlet/> : <Navigate to="/signin" />}</div>
  )
}
