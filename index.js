const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/naruto' , (req , res)=>{
    res.send("Naruto is the best anima!")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})