const express=require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'This Is Student Get Request'
    });
});

router.post('/',(req,res,next)=>
{
    res.status(200).json({
        message:'This Is Student Post Request'
    });
});



module.exports = router;