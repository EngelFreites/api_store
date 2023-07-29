const productsRouter = require("./product/product.router")
const usersRouter = require("./users/users.router")

const appRoutes = (app) =>{
    app.use('/api/products', productsRouter)
    app.use('/api/users', usersRouter)

}

module.exports = appRoutes