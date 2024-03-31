const { asyncErrors } = require("../middlewares/catchTry")
const student = require("../models/studentModel")
const studentModel = require('../models/studentModel')
const ErrorHendler = require("../utils/ErrorHendler")
const { sendtoken } = require("../utils/SendToken")
const { sendmail } = require("../utils/nodemailer")


exports.homepage = asyncErrors(async(req,res,next)=>{
    res.json({
        message:"Secure home page"
    })
})

exports.currentUser = asyncErrors(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    res.json({student})
})

exports.studentsignup = asyncErrors(async(req,res,next)=>{
   const student = await studentModel(req.body).save()
//    res.status(201).json(student)
    sendtoken(student,201,res)
})

exports.studentsignin = asyncErrors(async(req,res,next)=>{
   const student = await studentModel.findOne({ email : req.body.email })
   .select("+password")
   .exec()

   if(!student) return next(
    new ErrorHendler("User not found with this email address",404)
    );
    const isMatch = student.comparepassword(req.body.password)

    if(!isMatch) return next (new ErrorHendler("Wrong Credientials",500))
   sendtoken(student,200,res)
})

exports.studentsignout = asyncErrors(async(req,res,next)=>{
    res.clearCookie('token')
    res.json({success:"successfully signout!"})
})

exports.sendmail = asyncErrors(async(req,res,next)=>{
    const student = await studentModel.findOne({email:req.body.email}).exec()

    if(!student) return next(
        new ErrorHendler("User not found with this email address",404)
    );

    const url = `${req.protocol}://${req.get("host")}/student/forgot-link/${student._id}`;
    sendmail(req,res,next,url);
    student.resetPasswordToken = "1";
    res.json({student,url})
})

exports.forgetlink = asyncErrors(async (req,res,next)=>{
  const student = await studentModel.findById(req.params.id)

  if(!student) return next(
    new ErrorHendler("User not found with this email address",404)
  );

  if(!student.resetPasswordToken === "1"){
    
      student.password = req.body.password
      await student.save();
  }else{
    return next(
        new ErrorHendler("invalid Reset password Link! please try again..")
    )
  }

  res.json({
    sucess:true,
    message:"password changed successfully!"
  })
})

exports.resetPassword  = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id)
  
    student.password = req.body.password
    await student.save();
    sendtoken(student,201,res)
   
})

exports.studentUpdate = asyncErrors(async (req, res, next)=>{
    const student = await studentModel.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
        success:true,
        message:"student updated successfully"
    })
})

exports.studentAvatar = asyncErrors(async (req, res, next)=>{
   
    
})

