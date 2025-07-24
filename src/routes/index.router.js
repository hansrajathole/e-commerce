const express = require("express")
const productModel = require("../models/product.model")

const router = express.Router()



router.get("/", async(req, res)=>{
   const products = await productModel.find()
//    console.log("products :" , products);

    console.log(req.name);
    
   
    res.render("index.ejs",{products : products, title : "home page"})
})



module.exports = router