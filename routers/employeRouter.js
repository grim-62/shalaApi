const express = require('express');
const router = express.Router();
const { homepage,
        employesignup,
        employesignin, 
        employesignout,
        currentEmploye,
        sendmail,
        forgetlink,
        resetPassword,
        employeUpdate,
        employeorglogo
} = require('../controllers/employeCentroller');
const { isAuthanticated } = require('../middlewares/auth');

router.get('/', homepage );

router.post('/current', isAuthanticated ,currentEmploye );

router.post('/signup', employesignup );

router.post('/signin', employesignin );

router.post('/signout', isAuthanticated, employesignout );

router.post('/send-mail', sendmail );

router.get('/forgot-link/:id', forgetlink ); //this link is not working

router.post('/reset-password/:id', isAuthanticated , resetPassword );

router.post('/update/:id', isAuthanticated , employeUpdate );

router.post('/orglogo/:id', isAuthanticated , employeorglogo );

module.exports = router;