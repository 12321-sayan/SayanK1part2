const express=require('express');
const app= express();

const studentRoute=require('./api/routes/student');
const facultyRoute=require('./api/routes/faculty');
const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://sayan:@123Sayan@sayank.lwtvfxn.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>
{
    console.log('connection failed.......'); 
});


mongoose.connection.on('connected',connected=>{
    console.log('connected with database Successfull...');
});

app.use((req,res,next)=>{
    res.status(200).json({
        message:'app is running in localhost 3000'
    });
});



app.use('/student',studentRoute);
app.use('/faculty',facultyRoute);
app.use((req,res,next)=>
{
    res.status(404).json({
        error:'page not found'
    });
});




module.exports = app;


//  /home/ratpc-033/Desktop/SayanOP/login-Signup/api/routes/student.js