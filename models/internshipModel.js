const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema({
    
    profile:{
        type:String,
    },
    skills:String,
    internshiptype:{
        type:String,
        enum:["In office" , "Remote"]
    },
    openings:Number,
    from:String,
    to:String,
    duration:String,
    responsibitlity:String,
    stipend:{
        status:{
            type:String,
            enum:["Fixed","Negotiable","Performance based","Unpaid"]
        },
        amount:Number,
    },
    perks:String,
    assesments:String,


},{
    timestamps:true
})


const internship = mongoose.model("internship", internshipModel)

module.exports = internship;