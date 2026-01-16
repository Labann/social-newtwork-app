"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import Link from 'next/link';
const Navbar = () => {
  const [isModal, setIsModal] = useState(false);
    return (
    <div className='flex items-center justify-between p-4 md:px-6'>
        <Link href={"/home"} className="">
            <Image 
                src={"/logo/logo.png"} 
                alt='logo-img' 
                className='w-28 md:w-auto'
                width={200}
                height={100}
                />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4 font-bold">
            <Link href={"/home/notifications"}>
                <IoNotificationsOutline size={"1.5em"} className='cursor-pointer hidden sm:block'/>
                <span className='bg-black rounded-full w-1 h-1'></span>
            </Link>
            <FaBars size={"1.5em"} onClick={() => setIsModal(!isModal)} className='cursor-pointer sm:hidden'/>
            <Link href="/home/profile">
                <CgProfile size={"1.5em"} className='rounded-full cursor-pointer'/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar