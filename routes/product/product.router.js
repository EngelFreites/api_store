const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
    res.send("hellow product")
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    res.json({
        name: "camisa",
        id
    })
})

module.exports = router