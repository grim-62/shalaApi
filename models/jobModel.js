const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({
    
    title:String,
    skills:String,
    jobtype:{
        type:String,
        enum:["In office" , "Remote"]
    },
    openings:Number,
    description:String,
    preferences:String,
    salary:Number,
    perks:String,
    assesments:String,


},{
    timestamps:true
})

const jobs = mongoose.model("job", jobModel)

module.exports = jobs;