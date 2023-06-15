const express = require("express")
const app = express()

//declaire route
app.get('/',(req, res)=>{
    res.send('Hello node API')
})
app.listen(3000,()=>{
    console.log('Node API is running on port')

})

