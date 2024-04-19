const { asyncErrors } = require("../middlewares/catchTry")
const employeModel = require('../models/employeModel')
const ErrorHendler = require("../utils/ErrorHendler")
const { sendtoken } = require("../utils/SendToken")
const { sendmail } = require("../utils/nodemailer")
const imagekit = require("../utils/imagekit").initImageKit()
const path = require('path');

exports.homepage = asyncErrors(async(req,res,next)=>{
    res.json({
        message:"Secure employe home page"
    })
})

exports.currentEmploye = asyncErrors(async(req,res,next)=>{
    const employe = await employeModel.findById(req.id).exec()
    res.json({employe})
})

exports.employesignup = asyncErrors(async(req,res,next)=>{
   const employe = await employeModel(req.body).save()
   res.status(201).json(employe)
    sendtoken(employe,201,res)
})

exports.employesignin = asyncErrors(async(req,res,next)=>{
   const employe = await employeModel.findOne({ email : req.body.email })
   .select("+password")

   if(!employe) return next(
    new ErrorHendler("User not found with this email address",404)
    );
    const isMatch = employe.comparepassword(req.body.password)

    if(!isMatch) return next (new ErrorHendler("Wrong Credientials",500))
   sendtoken(employe,200,res)
})

exports.employesignout = asyncErrors(async(req,res,next)=>{
    res.clearCookie('token')
    res.json({success:"successfully signout!"})
})

// exports.sendmail = asyncErrors(async(req,res,next)=>{
//     const employe = await employeModel.findOne({email:req.body.email}).exec()

//     if(!employe) return next(
//         new ErrorHendler("User not found with this email address",404)
//     );

//     const url = `${req.protocol}://${req.get("host")}/employe/forgot-link/${employe._id}`;
//     sendmail(req,res,next,url);
//     employe.resetPasswordToken = "1";
//     res.json({employe,url})
// })

// exports.forgetlink = asyncErrors(async (req,res,next)=>{
//   const employe = await employeModel.findById(req.params.id)

//   if(!employe) return next(
//     new ErrorHendler("User not found with this email address",404)
//   );

//   if(!employe.resetPasswordToken === "1"){
    
//       employe.password = req.body.password
//       await employe.save();
//   }else{
//     return next(
//         new ErrorHendler("invalid Reset password Link! please try again..")
//     )
//   }

//   res.json({
//     sucess:true,
//     message:"password changed successfully!"
//   })
// })

// exports.resetPassword  = asyncErrors(async (req,res,next)=>{
//     const employe = await employeModel.findById(req.id)
  
//     employe.password = req.body.password
//     await employe.save();
//     sendtoken(employe,201,res)
   
// })

// exports.employeUpdate = asyncErrors(async (req, res, next)=>{
//     const employe = await employeModel.findByIdAndUpdate(req.params.id,req.body)
//     res.status(200).json({
//         success:true,
//         message:"employe updated successfully"
//     })
// })

// exports.employeAvatar = asyncErrors(async (req, res, next)=>{
//     const employe = await employeModel.findById(req.params.id).exec()
//     const file = req.files.avatar;
//     const modifiedFileName = `resumebuilder-${Date.now()}${path.extname(file.name)}`

//     if(!employe.avatar !== ""){
//         await imagekit.deleteFile(employe.avatar.fileId)
//     }

//     const {fileId, url}= await imagekit.upload({
//         file:file.data,
//         fileName:modifiedFileName,
//     })
//     employe.avatar ={fileId,url}
//     employe.save()
//     res.json({file:req.files.avatar})
    
// })