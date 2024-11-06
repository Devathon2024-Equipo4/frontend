import React from 'react'
import FooterComponent from "../components/FooterComponent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className=''>
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  )
}

export default Layout