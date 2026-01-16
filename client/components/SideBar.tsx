import React from 'react'
import { TbApps } from "react-icons/tb";
import Link from 'next/link';
import { RiUserCommunityLine } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className='col-span-2 shady-background rounded-md border-2 border-black/30 shadow-md relative h-[70vh] hidden md:block'>
        <h1 className='text-2xl md:text-3xl p-2 font-bold'>Menu</h1>
        <div className="flex flex-col justify-center text-xl space-y-2 px-1 pb-6">
            <Link href="/home/main-content" className="flex items-center space-x-2 hover:bg-black/30 w-full p-2 px-4 rounded-md">
                <TbApps size={"1em"}/>
                <p>Office</p>
            </Link>
            <Link href="/home/communities" className="flex items-center space-x-2 hover:bg-black/30 w-full p-2 px-4 rounded-md">
                <RiUserCommunityLine size={"1em"}/>
                <p>Communities</p>
            </Link>
            <Link href="/home/message" className="flex items-center space-x-2 hover:bg-black/30 w-full p-2 px-4 rounded-md">
                <LuMessageSquareText size={"1em"}/>
                <p>Messages</p>
            </Link>
            <Link href="/home/profile" className="flex items-center space-x-2 hover:bg-black/30 w-full p-2 px-4 rounded-md">
                <RxPerson size={"1em"}/>
                <p>Profile</p>
            </Link>
        </div>
        <Link href="/home/settings" className="flex items-center justify-center mx-auto space-x-2 absolute bottom-3 left-3 font-bold px-4 py-1 text-xl hover:bg-black/30 rounded-md">
            <IoSettingsOutline size={"1em"} />
            <p>Settings</p>
        </Link>
    </div>
  )
}

export default SideBar