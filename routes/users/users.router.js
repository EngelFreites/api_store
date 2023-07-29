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

module.exports = router