const express=require("express")
const app=express()
app.use(express.urlencoded({extended: true}))
app.get('/dogs',(req,res)=>{
    res.send("we are in get response")
})
app.post('/dogs',(req,res)=>{
    console.log(req.body)
    const {type,number}=req.body
    res.send(`these are inputs ${type},${number}`)
})
app.listen(3000,()=>{
    console.log("we are in 3000 port")
})