const express = require("express")
const productModel = require("../models/product.model")
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("productForm")
})

router.post("/add",async(req, res)=>{
    
    const { title , description , category , price } = req.body
    
    const product = new productModel(
        {
            title : title,
            description : description,
            category : category,
            price : price
         }
)




    await product.save()

   
    res.redirect("/")
    
})


module.exports = router