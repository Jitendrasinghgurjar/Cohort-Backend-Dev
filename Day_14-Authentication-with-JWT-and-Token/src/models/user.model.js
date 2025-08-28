const mongoose = require('mongoose')
const userSchena = new mongoose.Schema({
username: String,
password:String
})


const userModel = mongoose.model("user",userSchena)

module.exports = userModel


