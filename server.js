const app = require("./src/app")
const connect = require("./src/db/db")
const port = 3000
app.listen(port, ()=>{
    console.log("server running on port no : ",port);
    connect()
})