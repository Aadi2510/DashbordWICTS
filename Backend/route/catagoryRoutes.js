const express = require('express');
const router = express.Router();


const catagory = require('../controller/catagoryControllers.js')

router.post('/saveCatagory', catagory.saveCatagory);

router.get('/getCatagory', catagory.getCatagory);

router.get('/createCatagory', catagory.createCatagory);

module.exports = router



