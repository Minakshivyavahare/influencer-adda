const bcrypt = require('bcryptjs')
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async(req,res) => {
    //Check if all fields are filled
    const {name, email,phone, password} = req.body

    if(!name || !email || !phone || !password){
        res.status(400)
        throw new Error("Please Fill All Details")
    }

    //Check is user already exists
    const emailExist = await User.findOne({email: email})
    const phoneExist = await User.findOne({phone:phone})

    if(emailExist || phoneExist){
        res.status(400)
        throw new Error("user already Exist")
    }

    //Hash Passowrd
    const salt = bcrypt.genSaltSync(10)
    const hashedpassword = bcrypt.hashSync(password, salt)


    const user = await User.create({name,email,phone,password: hashedpassword})

    
    

    if(!user){
        res.status(400);
        throw new Error("User cannot be created")
    }
    res.status(201).json({
         id:user._id,
         name:user.name,
         email:user.email,
         isAdmin:user.isAdmin,
         token:generateToken(user._id),
         memberSince:user.createdAt
    })

})

const loginUser = asyncHandler(async(req,res) =>{

    const {email,password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("Please Fill All Details")
    }

    //email exist
    const user = await User.findOne({email: email})


    //check if email and password is correct
    if(user && bcrypt.compareSync(password, user.password)){
        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
            memberSince:user.createdAt
        })

    } else{
        res.status(401)
        throw new Error("Invalid Credentials")
    }
   
})


const privateController = async(req,res) =>{
    res.json({
        id:req.user._id,
            name:req.user.name,
            email:req.user.email,
            isAdmin:req.user.isAdmin,
    })
}

//Generate Token
const generateToken = (id) =>{
    let token = jwt.sign({id},process.env.JWT_SECRET, {expiresIn: '30d'})

    return token
}

module.exports = {registerUser, loginUser, privateController}

