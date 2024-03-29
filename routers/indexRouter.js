const express = require('express');
const router = express.Router();
const { homepage,
        studentsignup, 
        studentsignin, 
        studentsignout,
        currentUser,
        sendmail,

} = require('../controllers/indexCentroller');
const { isAuthanticated } = require('../middlewares/auth');

router.get('/', isAuthanticated ,homepage );

router.post('/student', isAuthanticated ,currentUser );

router.post('/student/signup', studentsignup );

router.post('/student/signin', studentsignin );

router.post('/student/signout',isAuthanticated, studentsignout );

router.post('/student/send-mail', sendmail );

module.exports = router;