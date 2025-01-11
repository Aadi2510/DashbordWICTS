const mongoose = require('mongoose');

let adminSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password:  {
        type: String,
        required: true,
        trim: true
    }

})

module.exports = mongoose.model('usernameData', adminSchema)