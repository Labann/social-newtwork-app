"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { FaGoogle } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import {useFormik} from "formik"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { login, reset } from '@/store/authSlice';
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';

const LoginPage = () => {
    
    const dispatch = useAppDispatch();
    const {isSuccess, isError, message, isLoading} = useAppSelector(state => state.auth);
    useEffect(() => {
        if(isSuccess){
            toast.success("login successfully")
            return
        }
        if(isError){
            toast.error(message)
            return
        }
        
    }, [isSuccess, isError, message, dispatch])
    const [isOpen, setIsOpen] = useState(false)
    const validationSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(3).max(20)
    })
    
    interface IFormValues{
        email: string
        password: string
    }
    const formik = useFormik<IFormValues>({
        initialValues: {email: "", password: ""},
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const action = await dispatch(login(values));
                if(action.type === "/auth/login/fulfilled"){
                    toast.success("logged in successfully")
                    return
                }    
            } catch (error) {
                toast.error((error as Error).message)
            }
            
        }
    })
  return (

    <div className='p-4'>
        <div className="mx-auto max-w-lg p-2 flex flex-col space-y-2">
            <div className="w-full text-center">
                <h1 className='text-default font-bold text-2xl'>Welcome back!</h1>
                <h3 className='text-xs'>Log to your account to get  started</h3>
            </div>
            <button className='flex cursor-pointer border-2 border-black/30 rounded-md items-center space-x-2 w-full justify-center p-2'>
                <span><FaGoogle size={"1.5em"}/></span>
                <span>Continue with Google</span>
            </button>

            <div className="flex items-center space-x-2 w-full">
                <div className="w-full border border-black/30 rounded-md"/>
                <span>Or</span>
                <div className="w-full border border-black/30 rounded-md"/>
            </div>
            <br />
            <form onSubmit={formik.handleSubmit} className='flex flex-col w-full space-y-3'>
                <input 
                    type="text" 
                    name='email' 
                    value={formik.values.email} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='border-black/30 border-2 rounded-md p-2'
                    placeholder='Enter your email'
                />
                {
                    formik.touched.email && formik.errors.email && (
                        <span className='text-red-400 text-xs'>{formik.errors.email}</span>
                    )
                }
                <div className="relative">
                    <input 
                        type={isOpen?  "text" :"password" }
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='border-black/30 w-full border-2 rounded-md p-2'
                        placeholder='Enter your password'
                    />
                    {
                        !isOpen? (
                        <FaEyeSlash onClick={() => setIsOpen(!isOpen)} className='absolute right-2 top-3'/>
                    ): (
                        <FaEye onClick={() => setIsOpen(!isOpen)} className='absolute right-2 top-3'/>
                    )
                    }
                    {
                        formik.touched.password && formik.touched.password && (
                            <span className='text-red-400 text-xs'>{formik.errors.password}</span>
                        )
                    }
                </div>
                <div className="flex items-center justify-between">
                    <input type='checkbox' className='border'/>
                    <p className='font-bold text-xs'>Forgot password?</p>
                </div>
                <br />
                <button type='submit' className='bg-default p-2 flex justify-center items-center cursor-pointer hover:bg-black/70 rounded-md text-center w-full bg-black/90 text-white'>{isLoading? <Spinner/>: "Sign in"}</button>
                <br />
            </form>
            <div className="flex items-center justify-center space-x-1">
                <p>{"Don't have an account? "}</p>
                <Link href={"/sign-up"} className='font-semibold text-xs'>Create now</Link>
            </div>
        </div>
    </div>
  )
}

export default LoginPage