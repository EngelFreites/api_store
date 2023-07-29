const boom = require('@hapi/boom')
class ProductsService {

    constructor(){
        this.products =[{
            name:"camisa",
            price: 1200,
            id:1,
            img: "url"
        },
        {
            name:"pantalon",
            price: 1000,
            id:2,
            img: "url"
        },
        {
            name:"camisa azul",
            price: 1000,
            id:3,
            img: "url"
        }
    ]
    }
    
    create({body}){
        const {name, price, img} = body

        const allId = this.products.map( product =>  product.id)

        const maxId = Math.max(...allId)
        const newProduct ={
            id: maxId + 1,
            name,
            price, 
            img
        }

        this.products.push(newProduct)

        return this.products
    }

    find(){
        return this.products
    }

    findOne({id}){
        const product = this.products.find(product => product.id === id)

        if(!product){
            throw boom.notFound('product not found')
        }

        return product
    }

    async upDate({id, change}){

        const index = this.products.findIndex( product => product.id === id)

        if(index === -1){
            throw boom.notFound('product not found')
        }

        const product = this.products[index]

        this.products[index] = {
            ...product,
            ...change
        }

      

        return this.products[index]
    }

    datele({id}){
        const newProduct = this.products.filter( product => product.id !== id)
        return newProduct

    }
}

module.exports = ProductsService