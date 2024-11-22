require('dotenv').config()

const express=require('express')
const app=express()
const port=4000
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/twitter',(req,res)=>{
      res.send('hiteshdotcom')
})
app.get("/erripook",(req,res)=>{
    res.send("Madhav")
})
app.get("/youtube",(req,res)=>{
res.send("<h2>Madhav erriook</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})