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

//  =========== Education ================= //

exports.addeducation = asyncErrors(async ( req , res , next )=>{
    const student = await studentModel.findById(req.id);
    student.resume.education.push({...req.body, id:uuidv4()});
    await student.save()
    res.json({messaage:"!education added" });
})

exports.editeducation = asyncErrors(async ( req , res , next )=>{
    const student = await studentModel.findById(req.id);
    const eduIndex = student.resume.education.findIndex((i)=> i.id === req.params.eduid);
    student.resume.education[eduIndex] = {
        ...student.resume.education[eduIndex],
        ...req.body}
    await student.save()
    res.json({messaage:"!education updated" });
})

exports.deleteEducation = asyncErrors(async (req ,res, next)=>{
    const student = await studentModel.findById(req.id);
    const filtereducation = student.resume.education.filter((i)=> i.id !== req.params.eduid);
    student.resume.education = filtereducation
    await student.save()
    res.json({messaage:"!education deleted" });
})

//  =========== Jobs ================= //

exports.addjobs = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id)
    student.resume.jobs.push({...req.body,id:uuidv4()})
    await student.save();
    res.json({message: "!job added "})
})

exports.editjobs = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const jobIndex = student.resume.jobs.findIndex((i)=> i.id === req.params.jobid);
    student.resume.jobs[jobIndex] = {
        ...student.resume.jobs[jobIndex],
        ...req.body}
    await student.save()
    res.json({messaage:"!jobs updated" });
})

exports.deletejobs = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const filterjob = student.resume.jobs.filter((i)=> i.id !== req.params.jobid);
    student.resume.jobs = filterjob
    await student.save()
    res.json({messaage:"!job deleted" });
})

//  =========== Internship  ================= //

exports.addint = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id)
    student.resume.internship.push({...req.body,id:uuidv4()})
    await student.save();
    res.json({message: "!internship added "})
})

exports.editint = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const intIndex = student.resume.internship.findIndex((i)=> i.id === req.params.intid);
    student.resume.internship[intIndex] = {
        ...student.resume.internship[intIndex],
        ...req.body}
        await student.save()
        res.json({messaage:"!jobs updated" });
})

exports.deleteint = asyncErrors(async (req,res,next)=>{
        const student = await studentModel.findById(req.id);
        const filterint = student.resume.jobs.filter((i)=> i.id !== req.params.intid);
        student.resume.internship = filterint
        await student.save()
        res.json({messaage:"!internship deleted" });
})

//  =========== responsibilities ================= //

exports.addrespo = asyncErrors(async (req,res,next)=>{})

exports.editrespo = asyncErrors(async (req,res,next)=>{})

exports.deleterespo = asyncErrors(async (req,res,next)=>{})

//  =========== courses ================= //

//  =========== projects ================= //
//  =========== skills ================= //
//  =========== accomplishments ================= //