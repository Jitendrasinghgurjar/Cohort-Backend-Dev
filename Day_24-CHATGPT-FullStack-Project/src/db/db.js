const mongoose = require('mongoose')
async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to mongodb");
        
    })
    .catch((err)=>{

        console.log("Error connection to Mongodb",err);
        
     })
}


module.exports = connectDB