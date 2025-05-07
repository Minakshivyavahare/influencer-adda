import { configureStore } from '@reduxjs/toolkit'
import auth from '../Features/auth/authSlice'
import admin from '../Features/admin/adminSlice'
import influencer from '../Features/influencers/influencerSlice'
import booking from '../Features/booking/bookingSlice'
import comment from '../Features/comment/commentSlice'

const store = configureStore({
    reducer:{
        auth, admin, influencer ,booking, comment
    }
})

export default store