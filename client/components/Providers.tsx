"use client"
import { useAppDispatch } from '@/app/hooks/redux'
import { setCurrentUser } from '@/store/authSlice'
import store from '@/store/store'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'
const InitialState = () => {
    const dispatch = useAppDispatch();
    if(typeof(window) !== "undefined"){
        const current_user = localStorage.getItem("current_user")
        if(current_user){
            dispatch(setCurrentUser(JSON.parse(current_user)))
        }
    }
   
    useEffect(()=>{
        //will do 
    }, [])
    return null
}

const Providers = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <Provider store={store}>
        <InitialState/>
        <Toaster 
            position="top-center"
            
            />
        {children}              
    </Provider>
  )
}

export default Providers