import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import influncerService from "./influencerService";


const influencerSlice = createSlice({
    name:'influencer',
    initialState:{
        influencers : [],
        influencer : {},
        isLoading:false,
        isSuccess:false,
        isError:false,
        message:""
    },
    reducers:{},
    extraReducers: (builder) => {

        builder
        .addCase(getInfluencer.pending, (state,action) =>{
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
        })
        .addCase(getInfluencer.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.influencer = action.payload
            state.isError = false;
        })
        .addCase(getInfluencer.rejected, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload
        })
        

    }
})

export default influencerSlice.reducer


//Get Influencer
export const getInfluencer = createAsyncThunk("FETCH/INFLUENCER", async(id, thunkAPI) =>{
   
try {
    return await influncerService.fetchInfluencer(id)
} catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
}
})




