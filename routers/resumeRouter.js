const express = require('express');
const router = express.Router();
const { resume,
        addeducation,
        editeducation,       
} = require("../controllers/resumeController");
const { isAuthanticated } = require('../middlewares/auth')

router.get('/',isAuthanticated, resume );

router.post('/add-edu',isAuthanticated, addeducation );

router.post('/edit-edu/:eduid',isAuthanticated, editeducation );

module.exports = router