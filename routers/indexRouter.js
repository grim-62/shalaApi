const express = require('express');
const router = express.Router();
const { homepage,
        studentsignup, 
        studentsignin, 
        studentsignout,
        currentUser,
        sendmail,
        forgetlink,
        resetPassword,
        studentUpdate,
        studentAvatar,
} = require('../controllers/indexCentroller');
const { isAuthanticated } = require('../middlewares/auth');

router.get('/', isAuthanticated , homepage );

router.post('/student', isAuthanticated ,currentUser );

router.post('/student/signup', studentsignup );

router.post('/student/signin', studentsignin );

router.post('/student/signout', isAuthanticated, studentsignout );

router.post('/student/send-mail', sendmail );

router.get('/student/forgot-link/:id', forgetlink );

router.post('/student/reset-password/:id', isAuthanticated , resetPassword );

router.post('/student/update/:id', isAuthanticated , studentUpdate );

router.post('/student/avatar/:id', isAuthanticated , studentAvatar );

module.exports = router;