const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const cartControllers = require('../controller/cartController.js')

router.post('/saveCart/:username',upload.single('image'), cartControllers.saveCartData)
router.get('/getCart/:username', cartControllers.getCartData)
router.delete('/deleteCart/:id/:username', cartControllers.deleteCartData)

module.exports = router