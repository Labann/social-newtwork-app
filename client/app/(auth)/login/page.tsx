"use client"
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
const LoginPage = () => {
  const [isOpen, setIsOpen] = useState()
    return (

    <div className='p-4'>
        <div className="mx-auto max-w-lg border p-2 flex flex-col space-y-2">
            <div className="w-full text-center">
                <h1 className='text-default font-semi-bold'>Welcome back!</h1>
                <h3 className='text-sm'>Log to your account to get  started</h3>
            </div>
            <button className='flex border border-primary/35 items-center space-x-2 w-full justify-center p-2'>
                <span><FaGoogle/></span>
                <span>Continue with Google</span>
            </button>

            <div className="flex items-center w-full">
                <div className="w-full border border-primary/30"></div>
                <span>Or</span>
                <div className="w-full border border-primary/30"></div>
            </div>
            <br />
            <form action="" className='flex flex-col w-full space-y-3'>
                <input type="text" className='border-primary/35 rounded-md p-2'
                    placeholder='Enter your email'
                />
                <div className="relative">
                    <input 
                        type="text" 
                        className='border-primary/35 rounded-md p-2'
                        placeholder='Enter your password'
                    />
                    {isOpen && <FaEyeSlash/>}
                </div>
                <div className="flex items-center justify-between">
                    <input type='textbox'/>
                    <p className='font-bold'>Forgot password?</p>
                </div>
                <br />
                <button className='bg-default p-2 rounded-md text-secondary text-center w-full'></button>
                <br />
                <div className="">
                    <p>{"Don't have an account? "}</p>
                    <Link href={"/sign-up"} className='font-semibold'>Create now</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage