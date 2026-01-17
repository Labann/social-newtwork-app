import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost } from "@/app/types";
type IInitialState = { 
    posts: IPost[]
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}

export const create_post = createAsyncThunk<
    {messgae: string, post: IPost},
    FormData,
    {rejectValue: string}
>("/post/create", async (post, thunkApi) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/create`, {
            method: "POST",
            credentials: "include",
            body: post
        })

        const data = await res.json()
        
        if(!res.ok){
            return thunkApi.rejectWithValue(data.error);
        }
        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})
const initialState: IInitialState ={ 
    posts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
const postSlice = createSlice({
    name: "posts", 
    initialState:  initialState,
    reducers: {
        reset: (state) => {
            state.posts = []
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(create_post.pending, (state) => {
                state.isLoading = true
            })
            .addCase(create_post.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = [action.payload.post, ...state.posts]
            })
            .addCase(create_post.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
    }
})


export const {reset} = postSlice.actions
export default postSlice.reducer;