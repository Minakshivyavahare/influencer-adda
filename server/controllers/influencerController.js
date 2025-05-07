const expressAsyncHandler = require("express-async-handler")
const Influencer = require('../models/influencerModel')


const getInfluencers = expressAsyncHandler(async(req,res) =>{
    
 const influencers = await Influencer.find()

 if(!Influencer){
    res.status(404)
    throw new Error("Influencers Not Found")
 }
 res.status(200).json(influencers)
})

const getInfluencer = async(req,res) =>{
   const influencer = await Influencer.findById(req.params.id)

   if(!influencer){
    res.status(404)
    throw new Error("Influencer not found")
   }
   res.status(200).json(influencer)
}

const searchInfluencer = async(req,res) =>{
    res.send('Search Influencers')
}

module.exports = {getInfluencers,getInfluencer,searchInfluencer}