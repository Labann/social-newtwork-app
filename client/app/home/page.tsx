"use client"
import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/redux'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const Home = () => {
    const {current_user} = useAppSelector(state => state.auth);
    const router = useRouter();
    useEffect(()=> {
        if(!current_user){
            toast.error("You are required to login");
            router.push("/login")
        }
    }, [current_user, router])
    return (
    <div>Home</div>
  )
}

export default Home