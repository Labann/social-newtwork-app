import HomeLoader from '@/components/HomeLoader'
import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import RightBar from '@/components/RightBar'
import AuthChecker from '@/components/AuthChecker'

const HomeLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className='min-h-screen'>
       <Suspense fallback={<HomeLoader/>}>   
        <AuthChecker/>     
        <Navbar/>
        <div className='grid md:grid-cols-12 gap-4 p-4 max-w-7xl mx-auto'>
            <SideBar/>
            <div className='shady-background col-span-7 p-3'>
              {children}
            </div>
            <RightBar/> 
        </div>
        
       </Suspense>
    </div>
   
  )
}

export default HomeLayout