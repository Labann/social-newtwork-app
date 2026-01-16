"use client"
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaImage } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
const CreatePost = () => {
  return (
    <form className='shady-background flex text-[#9ca3af] items-center space-x-2 p-3 rounded-md border-black/30 border-2 shadow-md'>
        <CgProfile size={"2em"} className='rounded-full'/>
        <input type="text" placeholder='Start a post' 
            className='w-full border-0 p-2 bg-transparent'
        />
        <div className="flex items-center text-black/50 space-x-3 font-extrabold">
            <FaImage size={".9em"} className='cursor-pointer'/>
            <FaRegPlayCircle size={".9em"} className='cursor-pointer'/>
            <IoDocumentOutline size={".9em"} className='cursor-pointer'/>
        </div>
    </form>
  )
}

export default CreatePost