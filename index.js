const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("hellow world")
})

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`listen on port ${PORT}`)
})