const express=require("express")
const app=express()
//console.dir(app)
//use used to signify if we get a new req
app.get("/",(req,res)=>{
    console.log("got new request")
    res.send("home page ")
    console.dir(req)
})
//app.get is used for redirecting to different parameters,ie for eg: localhost:8000/cats
//here we are creating subspace to the site.like creating a pattern.
app.get("/r/:subreddit",(req,res)=>{
    const {subreddit}=req.params
    res.send(`<h1> browsing the ${subreddit} subreddit </h1>`)
    res.send("this is a subreddit")
})
app.get("/search",(req,res)=>{
    const {q}=req.query
    res.send(`searched for:${q}`)
})
app.get("/r/:subreddit/:postid",(req,res)=>{
    const {subreddit,postid}=req.params
    res.send(`<h1> browsing the ${subreddit} subreddit having ${postid}</h1>`)
    res.send("this is a subreddit")
})
app.get("/cats",(req,res)=>{
    console.log("in /cats")
    res.send("meow meow")
})
app.post("/cats",(req,res)=>{
    res.send("its different one ")
})
app.get("/dogs",(req,res)=>{
    console.log("in dogs")
    res.send("woof woof")
})
app.get("*",(req,res)=>{
    res.send("dont know the path")
})
app.listen(3000,()=>{
    console.log("working on port 3000")
})