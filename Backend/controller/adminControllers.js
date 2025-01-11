const adminModel = require('../models/admin.js')




exports.adminLogin =  async (req, res) => {

    let username = req.body.username
    let password = req.body.password
    
    console.log(username)
    console.log(password)

    let data = await adminModel.find({ username: username, password: password })
    if (data.length > 0) {
        res.send(true)
    }
    else {
        res.send(false)
    }
}




exports.saveAdmin =  (req, res) => {
    let finalPass = new adminModel({    
        username: req.body.username,
        password:req.body.password
    })

    console.log(finalPass)

    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))

}


