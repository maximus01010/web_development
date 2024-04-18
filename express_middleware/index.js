const express=require('express')
const app=express()
const morgan=require("morgan")
app.use(morgan('tiny'))
//app.use(morgan('common'))
app.use((req,res,next)=>{
    console.log('this is the first middleware')
    return next();
    console.log('heheh')
})
app.use((req,res,next)=>{
    console.log('this is the second middleware')
    return next();
})
app.get('/',(req,res)=>{
    res.send("homepage")
    console.log('homepage')
})
app.get('/dogs',(req,res)=>{
    res.send("goss")
})
app.listen(3000,()=>{
    console.log("is on")
})