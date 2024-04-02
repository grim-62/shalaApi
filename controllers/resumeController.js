const { asyncErrors } = require("../middlewares/catchTry")
const student = require("../models/studentModel")
const studentModel = require('../models/studentModel')
const ErrorHendler = require("../utils/ErrorHendler")
const { sendtoken } = require("../utils/SendToken")
const { sendmail } = require("../utils/nodemailer")
const imagekit = require("../utils/imagekit").initImageKit()
const path = require('path');

exports.resumehome = asyncErrors(async (req,res,next)=>{
    res.json({messaage:"resume / route is working"})
})