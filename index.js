const express = require("express")
const app = express()

app.get("/products", (req, res) => {
    res.send("hellow world")
})

app.get("/products/:id", (req, res) => {
    res.send("hellow world")
})

app.get("/users", (req, res) => {
    res.send("hellow world")
})

app.get("/users/:id", (req, res) => {
    res.send("hellow world")
})

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`listen on port ${PORT}`)
})