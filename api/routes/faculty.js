const express=require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'This Is faculty Get Request'
    });
});

router.post('/',(req,res,next)=>
{
    res.status(200).json({
        message:'This Is faculty Post Request'
    });
});



module.exports = router;