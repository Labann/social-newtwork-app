import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "@/app/types";


interface IInitialState{
    current_user: IUser | null
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    message: string
}
const initialState: IInitialState = {
    current_user: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.current_user = null
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },

})