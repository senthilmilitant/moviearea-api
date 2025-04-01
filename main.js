
import express from "express"

const app = express()
const PORT = 3000

app.get ('/',(req,res)=>{
    res.send("HELLOW WORLD")
})

app.listen(PORT,()=>{
    console.log(`Example app listing on port ${PORT}`)
})















