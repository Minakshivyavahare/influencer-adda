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
     .addCase(getCooments.pending, (state,action) =>{
        state.commentLoading = true
        state.commentSuccess = false
        state.commentError = false
     })
      .addCase(getCooments.fulfilled, (state,action) =>{
        state.commentLoading = false
        state.commentSuccess = true
        state.comments = action.payload
        state.commentError = false
     })
      .addCase(getCooments.rejected, (state,action) =>{
        state.commentLoading = false
        state.commentSuccess = false
        state.commentError = true
        state.message = action.payload
     })
     .addCase(addCooments.pending, (state,action) =>{
        state.commentLoading = true
        state.commentSuccess = false
        state.commentError = false
     })
      .addCase(addCooments.fulfilled, (state,action) =>{
        state.commentLoading = false
        state.commentSuccess = true
        state.comments = [action.payload, ...state.comments]
        state.commentError = false
     })
      .addCase(addCooments.rejected, (state,action) =>{
        state.commentLoading = false
        state.commentSuccess = false
        state.commentError = true
        state.message = action.payload
     })
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


 //Add Cooments
 export const addCooments = createAsyncThunk("ADD/COMMENT", async(formData, thunkAPI) => {

   
    let token = thunkAPI.getState().auth.user.token
    try {
        return await commentService.createComments(formData,token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
 })