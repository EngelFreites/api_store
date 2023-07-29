const express = require('express')
const router = express.Router()
const ProductsService = require('../../sevices/products.services')
const service = new ProductsService

router.get("/", (req, res) => {
    const products = service.find()
    res.json(products)
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    const product = service.findOne({id})
    console.log(product)
    res.json(product)
})

router.post("/", (req, res) =>{
    const body = req.body
    const newProduct = service.create({body})
    res.status(201).json(newProduct)
})

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    const newProduct = service.datele({id})
    res.json({
        newProduct
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