import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentService from "./commentService";

const commentSlice = createSlice({
    name:"comment",
    initialState:{
        comments: [],
        commentLoading:false,
        commentSuccess:false,
        commentError:false,
        commentMessage: ""
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
    }
 })

 export default commentSlice.reducer



 //Get Cooments
 export const getCooments = createAsyncThunk("FETCH/COMMENTS", async(id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await commentService.fetchComments(id,token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
 })