const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to mognodb");
    })
    .catch(err=>{
        console.log("Error connecting to mongodb",err);
        
    })
}

module.exports = connectDB