const mongoose = require('mongoose');

const productSchema = mongoose.Schema(//array of objects
    {
        name: {
            type: String,
            required: [true, "Please enter product name!"]//this means the name field is required
        },

        quantity: {
            type: Number,
            required: true,
            default: 0//if the user doesnt provide a quantity, Mongoose can use : quantity=0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,//Ex= "image":"laptop.jpg"
            required: false
        },
    },//Now we finished the 1st object
    {
        timestamps: true,//Automatically add creation and update dates
    }//2nd object
);

//Example of a Schema: {
    //"name": "Laptop",
    //"quantity": 5,
    //"image":"laptop.jpg",
   // "price": 1000,
   // "createdAt": "2026-09-05T...",
    //"updatedAt": "2026-09-05T..."
//}

const Product = mongoose.model('Product',productSchema);

module.exports=Product;
