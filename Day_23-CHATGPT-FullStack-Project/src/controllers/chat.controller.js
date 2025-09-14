    const chatmodel = require('../models/chat.model')
    async function createChat(req,res){
        const {title} = req.body
        const user = req.user
        const chat = await chatmodel.create({
            user: user._id,
            title
        })
        res.status(201).json({
            message: "chat created sucessfully",
            chat:{
                _id: chat._id,
                title: chat.title
            }
        })
    }

    module.exports = {

    createChat
    }