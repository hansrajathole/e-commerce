const express = require("express")
const productRouter = require("./routes/product.router")
const indexRouter = require("./routes/index.router")
const userRouter = require("./routes/user.router")
const app = express()
const path = require("path")
const morgon = require("morgan")


app.use(morgon("dev"))

app.use((req,res, next)=>{
    console.log("middleware chala");
    


    next()
})


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine" , "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname,"../public")))


app.use("/", indexRouter) 
app.use("/users", userRouter)
app.use("/products",productRouter)


module.exports = app