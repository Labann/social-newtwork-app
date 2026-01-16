"use client"
import React , {useEffect, useRef} from 'react'
import { toast } from 'sonner';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { get_me } from '@/store/authSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
const AuthChecker = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const token = searchParams.get("token");
    const {current_user} = useAppSelector(state => state.auth);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const hasFetched = useRef(false)
    useEffect(()=> {
        if(hasFetched.current) return //prevent double fetch
        const fetchUser = async () => {
            const action = await dispatch(get_me())
            if(action.type === "/user/me/rejected"){
                toast.error("Not authenticated yet!")
                router.push("/login");
                return
            }
        }

        if(token || !current_user){
            fetchUser();
            return;
        }
    }, [current_user, router, pathname, dispatch, token])
    return null
}

export default AuthChecker