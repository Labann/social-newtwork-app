import React from 'react'
import Image from 'next/image'
const AuthLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className='shady-background min-h-screen'>
        <header className='px-4 md:px-6 flex items-center'>
            <Image
                src={"/logo/logo.png"}
                alt='logo-img'
                width={200}
                height={100}
            />
        </header>
        {children}
    </div>
  )
}

export default AuthLayout