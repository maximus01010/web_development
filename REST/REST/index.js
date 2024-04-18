const express=require("express")
const app=express()
const path=require("path")
const { v4: uuid } = require('uuid');
const methodoverride=require('method-override')
app.use(methodoverride('_method'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
let comments=[
    {
        id:uuid(),
        username:'sasi',
        comment:'hey heeyee'
    },
    {
        id:uuid(),
        username:'maximus',
        comment:'nyc nyc'
    },
    {
        id:uuid(),
        username:'unknown one',
        comment:'im no one'
    },
    {
        id:uuid(),
        username:'stranger',
        comment:'hey strangers'
    }
]
//this is to see the comments or requesting to get the existing cmmts
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})
//to create a cmmt
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})
app.post('/comments',(req,res)=>{
    console.log(req.body)
    const {username,comment}=req.body
    comments.push({username,comment,id:uuid()})
    //res.send("it worked")
    res.redirect("/comments")
})
app.get('/comments/:id',(req,res)=>{
    const {id}=req.params
    const comment=comments.find(c => c.id===id)
    res.render("comments/show",{comment})

})
app.patch('/comments/:id',(req,res)=>{
    const {id}=req.params
    const newcomment=req.body.comment
    const foundcomment=comments.find(c => c.id===id)
    foundcomment.comment=newcomment
    res.redirect('/comments')
    //res.send('updating something')
})
app.get('/comments/:id/edit',(req,res)=>{
    const {id}=req.params
    const comment=comments.find(c => c.id===id)
    res.render("comments/edit",{comment})
})
app.delete('/comments/:id',(req,res)=>{
    const {id}=req.params
    comments=comments.filter(c=>c.id !==id)
    res.redirect('/comments')
})
app.listen(3000,()=>{
    console.log("we are in 3000 port")
})