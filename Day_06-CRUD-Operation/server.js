const express = require('express');
const NoteModel = require('./src/models/note.Model')
require('dotenv').config();
const connectToDB = require('./src/db/db');

const app = express();
app.use(express.json())
connectToDB();
app.post('/notes',async (req,res)=>{
    const {title,content} = req.body
    console.log(title,content);
    await NoteModel.create({

        title,content
    })
    res.json({
        message: "note create suceesfully"
    })
    
})

app.get('/notes',async(req,res)=>{
    const notes = await NoteModel.find()
    res.json({
        message: "note fetch successfully",
        notes
    })
})
app.delete('/notes/:id',async(req,res)=>{
    const noteid = req.params.id
    await NoteModel.findOneAndDelete
    ({
    _id: noteid
    })
res.json({
    message: "note deleted"
})
})

app.patch('/notes/:id',async(req,res)=>{
    const noteid = req.params.id
    const {title} = req.body
    await NoteModel.findOneAndUpdate({
        _id: noteid
    },{
        title: title
})
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
    
})