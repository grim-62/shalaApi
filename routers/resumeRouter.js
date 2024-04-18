const express = require('express');
const router = express.Router();
const { resume,
        addeducation,
        editeducation,
        deleteEducation,
        addjobs,       
        editjobs,       
        deletejobs,  
        addint,
        editint,
        deleteint,     
        addrespo,
        editrespo,
        deleterespo
} = require("../controllers/resumeController");
const { isAuthanticated } = require('../middlewares/auth')

router.get('/',isAuthanticated, resume );

router.post('/add-edu',isAuthanticated, addeducation );

router.post('/edit-edu/:eduid',isAuthanticated, editeducation );

router.post('/delete-edu/:eduid',isAuthanticated, deleteEducation );

router.post('/add-jobs',isAuthanticated, addjobs );

router.post('/edit-jobs/:jobid',isAuthanticated, editjobs );

router.post('/delete-jobs/:jobid',isAuthanticated, deletejobs );

router.post('/add-intern',isAuthanticated, addint );

router.post('/edit-intern/:intid',isAuthanticated, editint );

router.post('/delete-intern/:intid',isAuthanticated, deleteint );

router.post('/add-respo',isAuthanticated, addrespo );

router.post('/edit-respo/:respoid',isAuthanticated, editrespo );

router.post('/delete-respo/:respoid',isAuthanticated, deleterespo );

module.exports = router