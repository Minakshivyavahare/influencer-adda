const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const adminProtect = asyncHandler(async(req,res,next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        let token
        try {

           token = req.headers.authorization.split(" ")[1]
          let decoded = jwt.verify(token,process.env.JWT_SECRET)
          req.user = await User.findById(decoded.id).select("-password")
         
          if(req.user.isAdmin){
            next()   
          }else{
            res.status(401)
            throw new Error("Only Admins have access")
          }
           
           
           
        } catch (error) {
            res.status(401)
            throw new Error("Invalid Token : Accessed Denied")
        }
       

    }else{
        res.status(401)
        throw new Error("Invalid Token : Accessed Denied")
    }
   

   
})

module.exports = adminProtect