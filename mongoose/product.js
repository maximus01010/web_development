const mongoose = require('mongoose');
const { title } = require('process');
mongoose.connect('mongodb://127.0.0.1:27017/shopapp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            maxlength: 20
        },
        price: {
            type: Number,
            required: true,
            min: [0, 'Price must be positive ya dodo!']
        }
    })