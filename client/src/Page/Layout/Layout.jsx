import React from 'react'
import Sidebar from '../User/Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
  <div className="flex">
      <div className="sticky top-0 h-screen ">
        <Sidebar />
      </div>
      <div className=" w-full">
        <div>
          <Header />
        </div>
        <div className="w-outlety">
          <Outlet />
        </div>
      </div>
    </div>

    </>
  )
}

export default Layout