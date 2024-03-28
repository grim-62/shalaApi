const jwt = require('jsonwebtoken')
const ErrorHendler = require('../utils/ErrorHendler')
const { asyncErrors } = require("../middlewares/catchTry")

exports.isAuthanticated = asyncErrors(async (req,res,next)=>{
    const { token } = req.cookies;

    if(!token){
        return next(new ErrorHendler("login to access the page",401))
    }
    const { id } = jwt.verify(token,process.env.JWT_SECRET)
    req.id = id
    next();

})