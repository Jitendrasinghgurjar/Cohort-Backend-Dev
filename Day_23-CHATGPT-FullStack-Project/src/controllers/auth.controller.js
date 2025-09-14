const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function registerUser(req,res){
    const {fullname:{firstname,lastname},email,password} = req.body
    const isuseralreadyexists = await userModel.findOne({
        email
    })

    if(isuseralreadyexists){
        return res.status(400).json({
        message: "user already exists"
    })
}
const hashPassword = await bcrypt.hash(password,10)

    const user = await userModel.create({
fullname:{
    firstname,lastname
},
email,
password:hashPassword
    })
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)


    res.cookie("token",token)
res.status(201).json({
    message: "user registered sucessfully",
    user:{
    email: user.email,
    _id: user.id,
    fullname: user.fullname
    }

})

}

async function loginUser(req,res){
    const {email, password} = req.body
    const user = await userModel.findOne({
        email
    })
    if(!user){
    return res.status(400).json({
        message: "invalid email or passwords"
    })
    }

    const ispasswordvalid = await bcrypt.compare(password,user.password)
    if(!ispasswordvalid){
        return res.status(400).json({
            message: "invalid email or passwords"
        })
    }
         const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(200).json({
        message: "user logged in succesfully",
        user:{
            email: user.email,
            _id: user._id,
            fullname: user.fullname
        }
    })
    }




module.exports= {
     registerUser,
     loginUser
}


