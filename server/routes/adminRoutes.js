const express = require('express')
const { createInfluencer, updateInfluencer, removeInfluencer, getAllBookings, updateBookings, getAllUsers, getAllComments } = require('../controllers/adminControllers')
const router = express.Router()
const adminProtect = require('../middleware/adminMiddleware')

 router.post("/influencer",adminProtect,createInfluencer)
 router.put("/influencer/:id",adminProtect,updateInfluencer)
 router.delete('/influencer/:id',adminProtect,removeInfluencer)
 router.get('/bookings/',adminProtect,getAllBookings)
 router.put('/bookings/:id',adminProtect,updateBookings)
 router.get('/users',adminProtect,getAllUsers)
 router.get('/comments',adminProtect,getAllComments)

 module.exports = router;