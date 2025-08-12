const express = require('express')
const connectToDB = require('./src/db/db')
const app = express()
app.use(express.json())
connectToDB()
app.get('/',(req,res)=>{
    res.send('hello wrold')
})
app.post('/notes',(req,res)=>{
    const{title,content} = req.body
    console.log(title,content);
    
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
    
})