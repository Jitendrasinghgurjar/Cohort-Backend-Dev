const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log("this middleware is between routes and api");
    next()
})
router.get('/',(req,res)=>{
    res.json({
        message: "welcome to the middleware"
    })
})

module.exports = router