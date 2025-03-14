import React from 'react'
import Navbar from './Home/Navbar'
import MobileNav from './Home/MobileNavbar'
import { Outlet } from 'react-router-dom'
import FooterSection from './Footer/FooterSection'

function Layout() {
  return (
    <>
      <Navbar/>
      <MobileNav/>
      <Outlet/>
      <FooterSection/>
    </>
  )
}

export default Layout
