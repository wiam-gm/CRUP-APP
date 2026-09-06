require ('dotenv').config();

const express = require ('express')
const mongoose = require ('mongoose')

const Product=require('./models/product.model.js');
const app = express()
const productRoute= require('./routes/product.route.js')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/products",productRoute);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to database!");
    app.listen(3000, ()=>{
    console.log('Server is running on port  3000');
    });
})
.catch((error)=>{
    console.log("Connection failed!");
    console.log(error.message);
})
//username = wgougam_db_user
//password = aKc0YrpP5yYAMYab

