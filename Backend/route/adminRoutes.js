const express = require('express');
const router = express.Router();

const adminControllers = require('../controller/adminControllers.js')

router.post('/saveAdmin', adminControllers.saveAdmin)
router.post('/adminLogin', adminControllers.adminLogin)


module.exports = router