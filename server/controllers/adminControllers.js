const expressAsyncHandler = require("express-async-handler")
const Influencer = require('../models/influencerModel')
const Booking = require('../models/bookingModel')
const User = require('../models/userModel')
const Comment = require("../models/commentModel")


const createInfluencer = expressAsyncHandler(async(req, res) =>{
    
  
    
    //Check if all fields are filled
    const {name,niche,followers,instagram_handle,rate,location,profilePic,gender} = req.body

    if (
        !name ||
        !niche ||
        !followers ||
        !instagram_handle ||
        !rate ||
        !location ||
        !profilePic ||
        !gender
      ) {
        res.status(400);
        throw new Error("Please Fill All Details");
      }

    //Check if influencer exist
    const influencerExist = await Influencer.findOne({instagram_handle})

    if(influencerExist){
        res.status(400)
        throw new Error("Influencer Already Exist")
    }
    
    //Create Infulencer
    const newInfluencer = await Influencer.create({
        name,
        niche,
        followers,
        instagram_handle,
        rate,
        location,
        gender,
        profilePic
    })

    if(!newInfluencer){
        res.status(400)
        throw new Error("Influencer not created")
    }
    res.status(200).json(newInfluencer)

})

const updateInfluencer = expressAsyncHandler(async(req, res) =>{
    
    const updateInfluencer = await Influencer.findByIdAndUpdate(req.params.id,req.body, {new: true})

    if(!updateInfluencer){
        res.status(400)
        throw new Error("Influencer Not Updated")
    }
    res.status(200).json(updateInfluencer)
})

const removeInfluencer = expressAsyncHandler(async(req, res) =>{
   
   await Influencer.findByIdAndDelete(req.params.id) 
   res.status(200).json({
    id: req.params.id,
    msg:"Influencer Removed"
   })
})

const getAllBookings = expressAsyncHandler(
    async(req, res) =>{
       
        const allBookings = await Booking.find().populate('user').populate("influencer")

        if(!allBookings){
            res.status(400)
            throw new Error("No Bookings Yet")
        }else{
            res.status(200).json(allBookings)
        }
    }
)

const updateBookings =  expressAsyncHandler(async(req, res) =>{

    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate('user').populate('influencer')

    if(!updatedBooking){
        res.status(400)
        throw new Error('Booking Not updated')
    }
    res.status(200).json(updatedBooking)
})

const getAllUsers = expressAsyncHandler(async(req,res) =>{

    const users = await User.find().select("-password")

    if(!users){
        res.status(404)
        throw new Error('Users Not Found!!')
    }
    res.status(200).json(users)

})


const getAllComments = expressAsyncHandler(async(req,res) =>{

    const comments = await Comment.find().populate('user').populate('booking')

    if(!comments){
        res.status(404)
        throw new Error('Users Not Found!!')
    }
    res.status(200).json(comments)

})
module.exports = {createInfluencer,updateInfluencer, removeInfluencer,getAllBookings,updateBookings,getAllUsers, getAllComments}