const express = require("express")
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/productmodel')

app.use(express.json())

//declaire route
app.get('/',(req, res)=>{
    res.send('Hello node API')
})

app.get('/blog',(req, res)=>{
    res.send('Hello blog my name is joan')
})
app.post('/product',async(req, res)=>{
    // console.log(req.body);
    // res.send(req.body)
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);

    }catch(error){
        console.log(error.mesage);
        res.status(500).json({message:error.message})
    }
})
mongoose.set('strictQuery', false)
mongoose.
connect('mongodb+srv://joan:nabirye66@cluster0.lgkwjic.mongodb.net/node-API?retryWrites=true&w=majority')
.then (()=>{console.log('Node API is running on port')
    app.listen(3000,()=>{
        
    
    })

    console.log('connected to mongoDB')
}).catch((error)=>{
    console.log(error)
})