const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const productController = require('../controller/productController.js')

router.post('/saveProduct',upload.single('image'), productController.saveProduct)
router.get('/getProduct', productController.getProduct)
router.get('/getProductByName/:productBrand', productController.getProductByName)
router.get('/viewProduct/:id', productController.viewProduct)
router.put('/updateProduct/:id',upload.single('image'), productController.updateProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)


module.exports = router

