const express=require("express")
const path=require("path")
const app=express()
const redditdata=require("./data.json")
//below on used to link the css and js
app.use(express.static(path.join(__dirname,'/public')))
//console.log(redditdata)
//we setting our engine to ejs
app.set('view engine','ejs')
// it is used to join the path of the views directory even if we are not on the precending directory of that ie templating directory

app.set('views',path.join(__dirname,'/views'))
app.get("/",(req,res)=>{
    res.render('home')
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params
    const data=redditdata[subreddit]
    //console.log(data)
    if(data){
        res.render('subreddit',{...data})
    }
    else{
        res.render('notfound',{subreddit})
    }
})
app.get("/rand",(req,res)=>{
    const num=Math.floor(Math.random()*10)+1
    res.render('random',{rand_numb:num})
})
app.get("/cats",(req,res)=>{
    const cats=['hey','cat','dogs','pups']
    res.render("allcats",{cats})
})

app.listen(3000,()=>{
    console.log("listening on port")
})