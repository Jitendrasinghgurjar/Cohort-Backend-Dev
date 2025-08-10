const express = require('express')
const app = express()
let notes = []
app.use(express.json())
app.get('/home',(req,res)=>{
    res.send('this is home page')
})
app.get('/about',(req,res)=>{
    res.send('this is about page')
})
app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message: "Notes added successfully"
    })
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})