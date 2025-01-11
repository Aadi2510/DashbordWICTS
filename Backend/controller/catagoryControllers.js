let catagoryModel = require('../models/catagory.js')
const mongoose = require('mongoose');



exports.saveCatagory =  (req, res) => {
 
    let finalData = new catagoryModel({
       catagory: req.body.catagory
    });
    console.log(finalData)
    finalData.save()
        .then(() => res.send("catagory created"))
        .catch(err => console.log(err))
    }


exports.getCatagory = async (req, res) => {
    let data = await catagoryModel.find({})
    res.json(data)
}


exports.createCatagory = (req, res) => {
    let catagoryname = req.params.catagoryData
    let CartSchema = new mongoose.Schema({
        catagory: String,
        productBrand: String,
        productPrice: String,
        productType: String,
        productRating: String,
        image: String,
    })

    mongoose.model(`${catagoryname}`, CartSchema)
    res.send("table created")
}

