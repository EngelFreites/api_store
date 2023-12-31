const boom = require('@hapi/boom')

const validateHandler = (schema, property) =>{
    return (req, res, next) =>{
        const data = req[property]
        console.log(data)
        const {error} = schema.validate(data, {abortEarly: false})

        if(error){
            next(boom.badRequest(error))
        }

        next()
    }
}

module.exports = validateHandler