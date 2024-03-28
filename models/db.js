const mongoose = require('mongoose')

exports.connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase connection  is Estabilised");
    }catch(err){
        
    }
}