"use client"
import React, { useState, useEffect } from 'react'
import { FaGoogle } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import {useFormik} from "formik"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { sign_up } from '@/store/authSlice';
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const {isLoading} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const router = useRouter()
      
  const [isOpen, setIsOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);  
  const validationSchema = yup.object({
        first_name: yup.string().required().min(2),
        last_name: yup.string().required().min(2),
        username: yup.string().required().min(2),
        email: yup.string().required().email(),
        password: yup.string().required().min(3).max(20),
        confirm_password: yup.string().required()
                            .oneOf([yup.ref("password")], "Password must match")
    })
    
    const formik = useFormik({
        initialValues: {first_name: "", last_name: "", username: "", email: "", password: "", confirm_password: ""},
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                            
                const action = await dispatch(sign_up(values));
                
                if(action.type === "/auth/sign_up/rejected"){
                    toast.error(action.payload?.toString(), {
                        className: "text-red-400"
                    })
                    return
                }    

                
                toast.success("user created successfully", {
                    className: "text-green-400"
                })
                formik.resetForm()
                router.push("/login")
                
            } catch (error) {
                console.error(error)
                toast.error((error as Error).message)
            }
        }
    })
  return (

    <div className='p-4'>
        <div className="mx-auto max-w-lg p-2 flex flex-col space-y-2">
            <div className="w-full text-center">
                <h1 className='text-default font-bold text-2xl'>Get started!</h1>
                <h3 className='text-xs'>Create new account</h3>
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
                <div className="grid lg:grid-cols-2 gap-3">
                    <div className="w-full">
                      <input 
                        type="text" 
                        name='first_name' 
                        value={formik.values.first_name} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='border-black/30 border-2 w-full rounded-md p-2'
                        placeholder='Enter your first name'
                    />
                    {
                        formik.touched.first_name && formik.errors.first_name && (
                            <span className='text-red-400 text-xs'>{formik.errors.first_name}</span>
                        )
                    }   
                    </div>
                    <div className="w-full">
                      <input 
                        type="text" 
                        name='last_name' 
                        value={formik.values.last_name} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='border-black/30 border-2 w-full rounded-md p-2'
                        placeholder='Enter your last name'
                    />
                    {
                        formik.touched.last_name && formik.errors.last_name && (
                            <span className='text-red-400 text-xs'>{formik.errors.last_name}</span>
                        )
                    }   
                    </div>
                </div>
                <input 
                    type="text" 
                    name='username' 
                    value={formik.values.username} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='border-black/30 border-2 rounded-md p-2'
                    placeholder='Enter your username'
                />
                {
                    formik.touched.username && formik.errors.username && (
                        <span className='text-red-400 text-xs'>{formik.errors.username}</span>
                    )
                }
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

                <div className="relative">
                    <input 
                        type={isConfirmOpen?  "text" :"password" }
                        name='confirm_password'
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='border-black/30 w-full border-2 rounded-md p-2'
                        placeholder='Confirm password'
                    />
                    {
                        !isConfirmOpen? (
                        <FaEyeSlash onClick={() => setIsConfirmOpen(!isConfirmOpen)} className='absolute right-2 top-3'/>
                    ): (
                        <FaEye onClick={() => setIsConfirmOpen(!isConfirmOpen)} className='absolute right-2 top-3'/>
                    )
                    }
                    {
                        formik.touched.confirm_password && formik.touched.confirm_password && (
                            <span className='text-red-400 text-xs'>{formik.errors.confirm_password}</span>
                        )
                    }
                </div>

                <div className="flex items-center justify-between">
                    <input type='checkbox' className='border'/>
                    <p className='font-bold text-xs'>Forgot password?</p>
                </div>
                <br />
                <button type='submit' className='bg-default p-2 cursor-pointer font-bold hover:bg-black/70 rounded-md text-center w-full bg-black/90 text-white flex justify-center items-center'>{isLoading? <Spinner/>: "Sign up"}</button>
                <br />
            </form>
            <div className="flex items-center justify-center space-x-1">
                <p>{"Already have an account? "}</p>
                <Link href={"/login"} className='font-semibold text-xs'>Sign in</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage