const express = require("express")
const appRoutes = require("./routes/index")
const app = express()
const {handleError, logErrores, boomError} = require('./middleware/error.handler')

app.use(express.json())
appRoutes(app)

app.use(logErrores)
app.use(boomError)
app.use(handleError)


const PORT = 3001

app.listen(PORT, () =>{
    console.log(`listen on port ${PORT}`)
})