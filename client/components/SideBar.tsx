import React from 'react'
import { TbApps } from "react-icons/tb";
import Link from 'next/link';
import { RiUserCommunityLine } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";
const SideBar = () => {
  return (
    <div className='col-span-3 shady-background p-4 rounded-md'>
        <h1 className='text-2xl md:text-3xl font-bold'>Menu</h1>
        <div className="flex flex-col text-xl space-y-4 p-2 py-6">
            <Link href="/home/main-content" className="flex items-center space-x-3">
                <TbApps size={"1.5em"}/>
                <p>Office</p>
            </Link>
            <Link href="/home/communities" className="flex items-center space-x-3">
                <RiUserCommunityLine size={"1.5em"}/>
                <p>Communities</p>
            </Link>
            <Link href="/home/message" className="flex items-center space-x-3">
                <LuMessageSquareText size={"1.5em"}/>
                <p>Messages</p>
            </Link>
            <Link href="/home/profile" className="flex items-center space-x-3">
                <RxPerson size={"1.5em"}/>
                <p>Profile</p>
            </Link>
        </div>
    </div>
  )
}

export default SideBar