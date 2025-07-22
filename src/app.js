const express = require("express")
const productRouter = require("./routes/product.router")
const indexRouter = require("./routes/index.router")
const app = express()
const path = require("path")


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine" , "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname,"../public")))


app.use("/products",productRouter)
app.use("/", indexRouter) 


module.exports = app