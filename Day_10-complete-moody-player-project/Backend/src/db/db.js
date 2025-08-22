const mongoose = require('mongoose')
function connectDb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to mongodb");
        
    })
    .catch((err)=>{
        console.log('Error connecting to mongodb',err);
        
    })
}

module.exports = connectDb();