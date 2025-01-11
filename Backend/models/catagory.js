const mongoose = require('mongoose');

let catagoryShema = new mongoose.Schema({
    catagory:  {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('catagoryData', catagoryShema)


