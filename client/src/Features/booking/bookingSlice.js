import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingService from "./bookingService";


const bookingSlice = createSlice({
    name:'booking',
    initialState:{
        bookings : [],
        booking:null,
        bookingsLoading:false,
        bookingsSuccess:false,
        bookingsError:false,
        bookingMessage:""
    },
    reducers:{},
    extraReducers: (builder) => {

     builder
     .addCase(getUsersBooking.pending, (state,action) => {
        state.bookingsLoading = true,
        state.bookingsSuccess = false,
        state.bookingsError = false
     })
     .addCase(getUsersBooking.fulfilled, (state,action) => {
        state.bookingsLoading = false,
        state.bookingsSuccess = true,
        state.bookings = action.payload,
        state.bookingsError = false
       
     })
     .addCase(getUsersBooking.rejected, (state,action) => {
        state.bookingsLoading = false,
        state.bookingsSuccess = false,
        state.bookingsError = true,
        state.message = action.payload
     })       
     .addCase(getUserBooking.pending, (state,action) => {
        state.bookingsLoading = true,
        state.bookingsSuccess = false,
        state.bookingsError = false
     })
     .addCase(getUserBooking.fulfilled, (state,action) => {
        state.bookingsLoading = false,
        state.bookingsSuccess = true,
        state.booking = action.payload,
        state.bookingsError = false
       
     })
     .addCase(getUserBooking.rejected, (state,action) => {
        state.bookingsLoading = false,
        state.bookingsSuccess = false,
        state.bookingsError = true,
        state.message = action.payload
     }) 
     .addCase(addBooking.pending, (state,action) => {
        state.bookingsLoading = true,
        state.bookingsSuccess = false,
        state.bookingsError = false
     })
     .addCase(addBooking.fulfilled, (state,action) => {
        state.bookingsLoading = false,
        state.bookingsSuccess = true,
        state.bookings = [action.payload, ...state.bookings]
        state.booking = action.payload,
        state.bookingsError = false
       
     })
     .addCase(addBooking.rejected, (state,action) => {
        state.bookingsLoading = false,
        state.bookingsSuccess = false,
        state.bookingsError = true,
        state.message = action.payload
     }) 
    }
})

export default bookingSlice.reducer


//Get all users booking
export const getUsersBooking = createAsyncThunk("BOOKING/FETCH", async(__, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
        
       return await bookingService.fetchUserBookings(token) 
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

//Get single users booking
export const getUserBooking = createAsyncThunk("BOOKING/FETCH/ID", async(id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    
   
    try {
        
       return await bookingService.fetchUserBooking(id, token) 
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


//add booking
export const addBooking = createAsyncThunk("ADD/BOOKING", async(id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
        
        return await bookingService.requestBooking(id,token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

