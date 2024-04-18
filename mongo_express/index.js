const express=require("express")
const app=express();
const path=require('path')
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs');
const mongoose =require('mongoose');
const { title } = require('process');

const product=require('./model/product')
mongoose.connect('mongodb://127.0.0.1:27017/farmstand')
    .then(() => {
        console.log("mongo CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("mongo OH NO ERROR!!!!")
        console.log(err)
    })
app.use(express.urlencoded({ extended: true }));
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.get('/products/new',(req,res)=>{
    res.render('products/new')
})
app.post('/products',async(req,res)=>{
    const new_product=new product(req.body)
    await new_product.save()
    console.log(new_product)
    res.redirect(`/products/${new_product._id}`)
})
app.get('/products',async(req,res)=>{
    const products=await product.find({})
    console.log(products)
    //res.send("all products will be here")
    res.render('products/index',{products})
})

app.get('/products/:id',async(req,res)=>{
    const {id}=req.params
    const prod=await product.findById(id)
    console.log(prod)
    //res.send('details page')
    res.render('products/show',{prod})
})
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const prod = await product.findById(id);
    res.render('products/edit', {prod})
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const prod = await product.findByIdAndUpdate(req.params.id,{$set: req.body}, { runValidators: true, new: true });
    res.redirect(`/products/${prod._id}`);
})
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await product.findByIdAndDelete(id);
    res.redirect('/products');
})
app.listen(3000,()=>{
    console.log('app listening')
})