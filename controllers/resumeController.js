const { asyncErrors } = require("../middlewares/catchTry")
const student = require("../models/studentModel")
const studentModel = require('../models/studentModel')
const ErrorHendler = require("../utils/ErrorHendler")
const { sendtoken } = require("../utils/SendToken")
const { sendmail } = require("../utils/nodemailer")
const imagekit = require("../utils/imagekit").initImageKit()
const path = require('path');
const { v4 : uuidv4 } = require('uuid');

exports.resume= asyncErrors(async (req,res,next)=>{
    const {resume} = await studentModel.findById(req.id);
    res.json({messaage:"resume page", resume }); 
})

exports.addeducation = asyncErrors(async ( req , res , next )=>{
    const student = await studentModel.findById(req.id);
    student.resume.education.push({...req.body, id:uuidv4()});
    await student.save()
    res.json({messaage:"!education added" });
})

exports.editeducation = asyncErrors(async ( req , res , next )=>{
    const student = await studentModel.findById(req.id);
    student.resume.education.findIndex((i) => i.id === req.params.eduid);
    student.resume.education[eduIndex] = {
        ...student.resume.education[eduIndex],
        ...req.body}
    await student.save()
    res.json({messaage:"!education updated" });
})