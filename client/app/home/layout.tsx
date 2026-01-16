import HomeLoader from '@/components/HomeLoader'
import React, { Suspense } from 'react'
import Navbar from '@/components/Navbar'

const HomeLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className='shady-background min-h-screen'>
       <Suspense fallback={<HomeLoader/>}>
        <Navbar/>
        {children}
       </Suspense>
    </div>
   
  )
}

export default HomeLayout