const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async(req,res,next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        let token
        try {

           token = req.headers.authorization.split(" ")[1]
          let decoded = jwt.verify(token,process.env.JWT_SECRET)
          req.user = await User.findById(decoded.id).select("-password")
           console.log(req.user);
           
           
            next()    
        } catch (error) {
            res.status(401)
            throw new Error("Invalid Token : Accessed Denied")
        }
       

    }else{
        res.status(401)
        throw new Error("Invalid Token : Accessed Denied")
    }
   

   
})

module.exports = protect