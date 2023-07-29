const express = require('express')
const router = express.Router()
const ProductsService = require('../../sevices/products.services')
const service = new ProductsService
const validateHandler = require('../../middleware/validate.handler')
const { createProductSchema, upDateProductSchema, getProductSchema} = require('../../schemas/product.schema')

router.get("/", (req, res) => {
    const products = service.find()
    res.json(products)
})

router.get("/:id", 
validateHandler(getProductSchema, 'params'),
async (req, res, next) => {
    try{
        const id = Number(req.params.id)
        const product = await service.findOne({id})

        res.json(product)
    }catch(error){
        next(error)
    }
})

router.post("/", 
validateHandler(createProductSchema, 'body'),
(req, res) =>{
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

router.patch("/:id", 
    validateHandler(getProductSchema, 'params'),
    validateHandler(upDateProductSchema, 'body'),

    async (req, res, next) => {
    try{
        const change = req.body
        const id = Number(req.params.id)
        const upDateProduct = await service.upDate({id, change})

        res.json(upDateProduct)

    }catch(error){
     next(error)
    }

    
})


module.exports = router