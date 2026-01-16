"use client"
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaImage } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
const CreatePost = () => {
  return (
    <form className='shady-background flex text-primary items-center space-x-3 p-3 rounded-md border-black/30 border'>
        <CgProfile className='rounded-full'/>
        <input type="text" placeholder='Start a post' 
            className='w-full border-0 bg-transparent'
        />
        <div className="flex items-center space-x-2">
            <FaImage size={".7em"}/>
            <FaRegPlayCircle size={".7em"}/>
            <IoDocumentOutline size={".7em"}/>
        </div>
    </form>
  )
}

export default CreatePost