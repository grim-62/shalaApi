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

exports.addrespo = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id)
    student.resume.responsibilities.push({...req.body,id:uuidv4()})
    await student.save();
    res.json({message: "! responsibilities added "})
})

exports.editrespo = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const respoIndex = student.resume.responsibilities.findIndex((i)=> i.id === req.params.respoid);
    student.resume.responsibilities[respoIndex] = {
        ...student.resume.responsibilities[respoIndex],
        ...req.body}
        await student.save()
        res.json({messaage:"!responsibilities updated" });
})

exports.deleterespo = asyncErrors(async (req,res,next)=>{  
    const student = await studentModel.findById(req.id);
    const filterrespo = student.resume.responsibilities.filter((i)=> i.id !== req.params.respoid);
    student.resume.responsibilities = filterrespo
    await student.save()
    res.json({messaage:"! responsability deleted" });
})

//  =========== courses ================= //

exports.addcourse = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id)
    student.resume.courses.push({...req.body,id:uuidv4()})
    await student.save();
    res.json({message: "courses added!"})
})

exports.editcourse = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const corIndex = student.resume.courses.findIndex((i)=> i.id === req.params.corid);
    student.resume.courses[corIndex] = {
        ...student.resume.courses[corIndex],
        ...req.body}
        await student.save()
        res.json({messaage:"courses updated!" });
})

exports.deletecourse = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const filtercor = student.resume.courses.filter((i)=> i.id !== req.params.corid);
    student.resume.courses = filtercor
    await student.save()
    res.json({messaage:"courses deleted!" });
})

//  =========== projects ================= //

exports.addproject = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id)
    student.resume.projects.push({...req.body,id:uuidv4()})
    await student.save();
    res.json({message: "projects added!"})
})

exports.editproject = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const proIndex = student.resume.projects.findIndex((i)=> i.id === req.params.proid);
    student.resume.projects[proIndex] = {
        ...student.resume.projects[proIndex],
        ...req.body}
        await student.save()
        res.json({messaage:"projects updated!" });
})

exports.deleteproject = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const filtercor = student.resume.projects.filter((i)=> i.id !== req.params.proid);
    student.resume.projects = filtercor
    await student.save()
    res.json({messaage:"projects deleted!" });
})

//  =========== skills ================= //

exports.addskill = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id)
    student.resume.skills.push({...req.body,id:uuidv4()})
    await student.save();
    res.json({message: "skills added!"})
})

exports.editskill = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const proIndex = student.resume.skills.findIndex((i)=> i.id === req.params.skillid);
    student.resume.skills[proIndex] = {
        ...student.resume.skills[proIndex],
        ...req.body}
        await student.save()
        res.json({messaage:"skills updated!" });
})

exports.deleteskill = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const filterskill = student.resume.skills.filter((i)=> i.id !== req.params.skillid);
    student.resume.skills = filterskill
    await student.save()
    res.json({messaage:"skills deleted!" });
})

//  =========== accomplishments ================= //

exports.addacco = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id)
    student.resume.accomplishments.push({...req.body,id:uuidv4()})
    await student.save();
    res.json({message: "accomplishments added!"})
})

exports.editacco = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const accoIndex = student.resume.accomplishments.findIndex((i)=> i.id === req.params.accoid);
    student.resume.accomplishments[accoIndex] = {
        ...student.resume.accomplishments[accoIndex],
        ...req.body}
        await student.save()
        res.json({messaage:"accomplishments updated!" });
})

exports.deleteacco = asyncErrors(async (req,res,next)=>{
    const student = await studentModel.findById(req.id);
    const filteracco = student.resume.accomplishments.filter((i)=> i.id !== req.params.accoid);
    student.resume.accomplishments = filteracco
    await student.save()
    res.json({messaage:"accomplishments deleted!" });
})