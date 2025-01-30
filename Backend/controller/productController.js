const productModel = require('../models/product.js')

exports.saveProduct = async (req, res) => {
    const productData = new productModel({
        catagory: req.body.catagory,
        productBrand: req.body.productBrand,
        image: req.file.filename
    })
    productData.save()
        .then(() => {
            res.send('save')
        })
        .catch(err => console.log(err))
}


exports.getProduct = async (req, res) => {
    let data = await productModel.find({})
    res.json(data)
}


exports.getProductByName = async (req, res) => {
    let productBrand = req.params.productBrand
    let data = await productModel.find ({ productBrand: { "$regex": productBrand, "$options": "i" } })
    res.json(data)
}


exports.viewProduct = async (req, res) => {
    let id = req.params.id
    let data = await productModel.find({ _id: id })
    res.json(data)
}


exports.deleteProduct = async (req, res) => {
    let id = req.params.id
    await productModel.findByIdAndDelete({ _id: id })
    res.send("deleted")
}



exports.updateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        
        let updateData = {
            catagory: req.body.catagory,
            productBrand: req.body.productBrand,
            image: req.file.filename
        };
        
        await productModel.findByIdAndUpdate(id, updateData, { new: true });
        
        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update product", details: error.message });
    }
};

