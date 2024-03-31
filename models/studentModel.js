const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const studentModel = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"First name is required."],
        minLength:[4,"First name should be atleast 4 character long"]
    },
    lastname:{
        type:String,
        required:[true,"First name is required."],
        minLength:[4,"First name should be atleast 4 character long"]
    },
    contact:{
        type:String,
        required:[true,"Contact is required."],
        maxLength:[10,"constact must not exceed 10 characters."],
        minLength:[10,"constact shuld be atleast 10 character long."]
    },
    city:{
        type:String,
        required:[true,"city name is required."],
        minLength:[3,"city name should atleast 3 character long"]
      
    },
    gender:{
        type:String,
        Enum:["Male","Female","Others"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            'Please fill a valid email address'
        ],   
    },
    password:{
        type:String,
        select:false,
        maxLength:[
            15,
            "Password should not exceed more then 15 characters"
        ],
        minLength:[
            6,
            "Password should have  at lest 6 characters"
        ],
        // match:[
        //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/,
        //     "special/number/capital"
        // ]
    },
    resetPasswordToken:{
        type:String,
        default:"0"
    },
    avatar:String,
},{
    timestamps:true
})

studentModel.pre("save",async function(){
    if(!this.isModified('password')){
        return;
    }
    let salt =await bcrypt.genSaltSync(10);
    this.password =  bcrypt.hashSync(this.password,salt)
})

studentModel.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password,this.password)
}

studentModel.methods.getjwttoken = function(){
    return jwt.sign(
        { id:this.id },
        process.env.JWT_SECRET,
        { expiresIn:process.env.JWT_EXPIRE }
    )
}

const student = mongoose.model("student", studentModel)

module.exports = student;