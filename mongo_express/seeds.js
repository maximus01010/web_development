const mongoose=require('mongoose')
const product=require('./model/product')
mongoose.connect('mongodb://127.0.0.1:27017/farmstand')
    .then(() => {
        console.log("mongo CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("mongo OH NO ERROR!!!!")
        console.log(err)
    })
// const p=new product({
//     name:'ruby grape',
//     price:1.87,
//     category:'fruit'
// })
// p.save()
//     .then(p=>{
//         console.log(p)
//     })
//     .catch(e=>{
//         console.log(e)
//     })
// another easy way to add much data,

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

product.insertMany(seedProducts)
    .then(res=>{
        console.log(res)
    })
    .catch(e=>{
        console.log(e)
    })