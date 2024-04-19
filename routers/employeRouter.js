const express = require('express');
const router = express.Router();
const { homepage,
        employesignup,
        employesignin, 
        employesignout,
        currentEmploye,
        // sendmail,
        // forgetlink,
        // resetPassword,
        // employeUpdate,
        // employeAvatar,
} = require('../controllers/employeCentroller');
const { isAuthanticated } = require('../middlewares/auth');

router.get('/', homepage );

router.post('/current', isAuthanticated ,currentEmploye );

router.post('/signup', employesignup );

router.post('/signin', employesignin );

router.post('/signout', isAuthanticated, employesignout );

// router.post('/employe/send-mail', sendmail );

// router.get('/employe/forgot-link/:id', forgetlink );

// router.post('/employe/reset-password/:id', isAuthanticated , resetPassword );

// router.post('/employe/update/:id', isAuthanticated , employeUpdate );

// router.post('/employe/avatar/:id', isAuthanticated , employeAvatar );

module.exports = router;