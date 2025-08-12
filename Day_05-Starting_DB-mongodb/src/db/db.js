const mongoose = require('mongoose')
require('dotenv').config();
function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to mongodb");
        
    })
}
module.exports = connectToDB