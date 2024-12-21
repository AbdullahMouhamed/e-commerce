import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout() {



    return (
        <>
            <Navbar />
            <div className='container w-[95%] py-24 min-h-[69.6vh]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    )
}
