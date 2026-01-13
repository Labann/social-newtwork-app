"use client"
import Link  from 'next/link'
import React from 'react'
import * as  yup from "yup"
import { useState } from 'react'
import { useFormik } from 'formik'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const ChangaPassword = () => {
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
            onSubmit: () => console.log("submitted")
        })
  return (
    <div className='p-4'>
        <div className="mx-auto max-w-lg p-2 flex flex-col space-y-2">
            <div className="w-full text-center">
                <h1 className='text-default font-bold text-2xl'>Create new password</h1>
                <h3 className='text-xs'>Use letters from a to z and numbers from 0 to 9</h3>
            </div>

            
            <form onSubmit={formik.handleSubmit} className='flex flex-col w-full space-y-3'>
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
                <br />
                <button type='submit' className='bg-default p-2 cursor-pointer hover:bg-black/70 rounded-md text-center w-full bg-black/90 text-white'>
                        Create
                </button>
                <button className='w-full'>Cancel</button>
                <br />
            </form>
            
        </div>
    </div>
  )
}

export default ChangaPassword