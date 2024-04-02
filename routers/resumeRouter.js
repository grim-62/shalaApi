const express = require('express');
const router = express.Router();
const {resumehome} = require("../controllers/resumeController");
const { isAuthanticated } = require('../middlewares/auth')

router.get('/',isAuthanticated,resumehome)

module.exports = router