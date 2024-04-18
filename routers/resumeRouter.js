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
        deleterespo,
        addcourse,
        editcourse,
        deletecourse,
        addproject,
        editproject,
        deleteproject,
        addskill,
        editskill,
        deleteskill
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

router.post('/add-course',isAuthanticated, addcourse );

router.post('/edit-course/:corid',isAuthanticated, editcourse );

router.post('/delete-course/:corid',isAuthanticated, deletecourse );

router.post('/add-proj',isAuthanticated, addproject );

router.post('/edit-proj/:proid',isAuthanticated, editproject);

router.post('/delete-proj/:proid',isAuthanticated, deleteproject );

router.post('/add-skill',isAuthanticated, addskill );

router.post('/edit-skill/:skillid',isAuthanticated, editskill);

router.post('/delete-skill/:skillid',isAuthanticated, deleteskill );

router.post('/add-acco',isAuthanticated, addskill );

router.post('/edit-acco/:accoid',isAuthanticated, editskill);

router.post('/delete-acco/:accoid',isAuthanticated, deleteskill );

module.exports = router