const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'<h1>Hello my student</h1>'
    })
});

module.exports=router;