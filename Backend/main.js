let express = require('express')
let mongoose = require('mongoose')

let cors = require('cors')

const db = require('./dataBaseConfig.js')

const dotenv = require('dotenv')

dotenv.config({
    path: './.env'
})


let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())


app.use(express.static('uploads'))




db().then(async () => {

    // List collections
    // const collections = await db.listCollections().toArray();
    // // console.log(collections)
    // console.log('name of collections:', collections.map((data)=>data.name));
    app.listen(process.env.PORT || 8000, () => {
        console.log(`erver is running at port : ${process.env.PORT}`);
    })



    const productRoute = require('./route/productRoute.js')
    const cartRoute = require('./route/cartRoutes.js')
    const adminRoute = require('./route/adminRoutes.js')
    const catagoryRoutes = require('./route/catagoryRoutes.js')


    app.use('/api', productRoute)

    app.use('/api', cartRoute)

    app.use('/api', adminRoute)

    app.use('/api', catagoryRoutes)

})
    .catch(err => console.log(err))


