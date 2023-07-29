const express = require("express")
const appRoutes = require("./routes/index")
const app = express()

appRoutes(app)

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`listen on port ${PORT}`)
})