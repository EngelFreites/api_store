const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
    res.send("hellow users")
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    res.json({
        name: "user1",
        id
    })
})

router.post("/", (req, res) =>{
    const body = req.body

    res.json({
        body
    }).status(201)
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    res.json({
        message: "eliminated"
    })
})

router.patch("/:id", (req, res) => {
    const body = res.body
    const id = req.params.id
    res.json({
        body,
        id
    })
})

module.exports = router