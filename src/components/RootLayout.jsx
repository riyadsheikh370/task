import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayout
