import express from "express"
const app = express()
const PORT = 3000


app.get('/',(req,res)=>{
    res.json ({message:"hello students"})
})
// CRUD functionality of movies
//R - for reading movies
app.get('/movies',(req,res)=>{

})

// c- for create movies

app.post('/movies',(req,res)=>{

})

//U - for update movies
app.put('/movies /:id',(req,res)=>{

  
})


// D - for delete movies
app.delete('/movies',(req,res)=>{

})




app.listen(PORT,()=>{
    console.log(`Example app listing on port ${PORT}`)
})















