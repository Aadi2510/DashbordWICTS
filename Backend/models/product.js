const mongoose = require('mongoose');

let productShema = new mongoose.Schema({
    productBrand:  {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    catagory: String,
    image: String,
},
{
    timestamps: true
})

module.exports = mongoose.model('MycategoryData', productShema)
