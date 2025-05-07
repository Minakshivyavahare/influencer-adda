const { default: mongoose } = require("mongoose");


const influencerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    niche:{
        type:String,
        required:true,
        enum:['lifestyle','education','fashion','sports','motivational','technology','gaming','fitness','podcast','devotional','comic','food','other']
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female','other']

    },
    followers:{
        type:String,
        required:true
    },
    instagram_handle:{
        type:String,
        required:true,
        unique:true
    },
    rate:{
        type:Number,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    isActive:{
        type: Boolean,
        default:true,
        required: true,
    },
    profilePic:{
        type:String,
        required:true
    }
},{
    timestamps:true,
}
)

module.exports = mongoose.model('Influencer', influencerSchema)