const nodemailer = require('nodemailer')
const ErrorHendler = require('./ErrorHendler')

exports.sendmail = ( req, res, next, url)=>{
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        post:465,
        auth:{
            user:process.env.MAIL_ADDRESS,
            pass:process.env.MAIL_PASSWORD,
        },
    })

    const mailoptions = {
        from : "Prashant PVT.",
        to: req.body.email,
        subject:"password reset-link",
        html:`
        <h3>Do not share this link to anyone...</h3><br>
        <h1>Click link blow to reset password</h1><br>
        <a href="${url}">Reset password link</a>`,
    }
    transport.sendMail(mailoptions,(err,info)=>{
        if(err) return next( new ErrorHendler(err,500))
        console.log(info);
    return res.status(200).json({
        success:true,
        message:"mail send sucessfully",
        url,
    })
    })
}