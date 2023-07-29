
class ProductsService {

    constructor(){
        this.products =[{
            name:"camisa",
            price: 1200,
            id:1
        },
        {
            name:"pantalon",
            price: 1000,
            id:2
        },
        {
            name:"camisa azul",
            price: 1000,
            id:3
        }
    ]
    }
    
    create({body}){
        const {name, price} = body

        const allId = this.products.map( product =>  product.id)

        const maxId = Math.max(...allId)
        const newProduct ={
            id: maxId + 1,
            name,
            price
        }

        this.products.push(newProduct)

        return this.products
    }

    find(){
        return this.products
    }

    findOne({id}){
        const product = this.products.find(product => product.id === id)
        return product
    }

    upDate(){

    }

    datele({id}){
        const newProduct = this.products.filter( product => product.id !== id)
        return newProduct

    }
}

module.exports = ProductsService