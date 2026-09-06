const express=require("express");
const router=express.Router();

const Product=require('../models/product.model.js');

router.get('/',async(req,res)=>{
    const products=await Product.find();//go to mongoDB and retrieve all products
    res.send(products);
    console.log(products);
});

router.get('/:id',async(req,res)=>{
    try{
        const id= req.params.id;
        const product=await Product.findById(id);
        res.status(200).json(product);

    }catch(error){
        res.status(500).send({message:error.message});
    }
    
});

router.post('/',async(req,res)=>{
    try{
        const product=await Product.create(req.body);//take the data from the req.body,
                                                      // create a MongoDB document using my Product model ,
                                                      // and save it to mongoDB
        console.log(product);
        res.status(201).send(product);
    }catch(error){
        res.status(500).send({message:error.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const id= req.params.id;
        const product=await Product.findByIdAndDelete(id);
        res.send("Product with id"+id+" is deleted successfully!");
        console.log("deleted!");

    }catch(error){
        res.status(500).send({message:error.message});
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const id= req.params.id;// const{id}=req.params
        const product=await Product.findByIdAndUpdate(id,req.body);//update the product with that specified id with the new one that the user will enter
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        const newProduct=await Product.findById(id);
        console.log("updated!");
        res.status(200).send(newProduct);
    }catch(error){
        res.status(500).send({message:error.message});
    }
});

module.exports=router;

