import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const login = createAsyncThunk<
    IUser,
    {email: string, password: string},
    {rejectValue: string}
>("/auth/login", async (user, thunkApi) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(user)
        })

        const data = await res.json()
        localStorage.setItem("currrent_user", JSON.stringify(data));
        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})


export const sign_up = createAsyncThunk<
    IUser,
    {first_name: string, last_name: string, username: string, email: string, password: string},
    {rejectValue: string}
>("/auth/sign_up", async (user, thunkApi) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(user)
        })

        const data = await res.json()
        localStorage.setItem("current_user", JSON.stringify("current_user"));

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const logout = createAsyncThunk<
    {message: string},
    void,
    {rejectValue: string}
>("/auth/logour", async (_, thunkApi) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
        })

        const data = await res.json()
        await localStorage.removeItem("current_user")
        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

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
        },
        setCurrentUser: (state, action) =>{
            state.current_user = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.current_user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            .addCase(sign_up.pending, (state) => {
                state.isLoading = true
            })
            .addCase(sign_up.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.current_user = action.payload
            })
            .addCase(sign_up.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = true
                state.isSuccess = true
                state.current_user = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
    }

})


export const {reset, setCurrentUser} = authSlice.actions;


export default authSlice.reducer;
