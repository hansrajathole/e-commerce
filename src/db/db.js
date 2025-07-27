const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect("mongodb+srv://atholehansraj72:u2VuIOC00wRFxP8t@cluster0.saxvgwo.mongodb.net/VIPS")
    .then(()=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect