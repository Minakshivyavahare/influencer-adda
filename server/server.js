const express = require('express')
const colors = require('colors')
require("dotenv").config()
const connectDB = require("./config/db_config")
const errorHandler = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000

//Body-parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//DB Connection
connectDB()



app.get('/',(req,res) =>{
    res.json({
        msg: "WELCOME TO INFLUENCER ADDA APP 1.0"
    })
})

//Auth routes
app.use("/api/auth", require('./routes/authRoutes'))

//Admin routes
app.use('/api/admin', require('./routes/adminRoutes'))

//Booking routes
app.use('/api/booking', require('./routes/bookingRoutes'))

//Influencers routes
app.use('/api/influencers', require('./routes/influencerRoutes'))


//Error Handler
app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running at port ${PORT}`.bgBlue.black))