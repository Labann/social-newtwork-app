"use client"
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FcLike } from "react-icons/fc";
import { SlOptions } from "react-icons/sl";
import { LuMessageSquareText } from "react-icons/lu";
import { FaRetweet } from "react-icons/fa6";
import { BsBookmark } from "react-icons/bs";

const Post = () => {
  return (
    <div className='shady-background my-5 p-3 shadow-md rounded-md border-2 border-black/30 flex space-x-2'>
        <CgProfile size={"3em"} className='rounded-full'/>
        <div className="">
            <div className="flex items-center justify-between">
                <div className="">
                    <h3>Antony Jim</h3>
                    <p className='text-[#9ca3af] text-xs'>
                        14 December 2023, at 09:12 hrs
                    </p>
                </div>
                <SlOptions size={"1.5em"} className='text-[#9ca3af] font-bold'/>
            </div>
            <div className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores praesentium ullam unde quaerat itaque eaque facilis qui ipsam possimus!</div>
            <div className="border-y-2 border-black/30 py-3">
                <div className="w-fit flex items-center">
                    <CgProfile size={"1.5em"} className='rounded-full -ml-3'/>
                    <CgProfile size={"1.5em"} className='rounded-full -ml-3'/>
                    <CgProfile size={"1.5em"} className='rounded-full -ml-3'/>
                    <p className='text-sm'>Juliet and other reacted</p>
                </div>
            </div>
            <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                        <FcLike size={"1.2em"} className='cursor-pointer'/>
                        <p className='text-xs'>223</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <LuMessageSquareText size={"1.2em"} className='cursor-pointer'/>
                        <p className='text-xs'>15</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaRetweet size={"1.2em"} className='cursor-pointer'/>
                        <p className='text-xs'>20</p>
                    </div>
                     
                </div>
                <BsBookmark className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Post