"use client"
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { toast } from 'sonner';
import { usePathname, useRouter } from 'next/navigation';
import { get_me } from '@/store/authSlice';

const Home = () => {
    const pathname = usePathname();
    const {current_user} = useAppSelector(state => state.auth);
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    useEffect(()=> {
        const fetchUser = async () => {
            const action = dispatch(get_me())
            if((await action).type === "/user/me/rejected"){
                toast.error("Not authenticated yet!")
                router.push("/login");
                return
            }
        }

        if(pathname.includes("token")){
            fetchUser();
        }
        
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