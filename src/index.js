const express=require("express")
const port=5000

const app= express()

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/profile",(req,res)=>{
    res.send("your profile is here")
})

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})