const Joi = require('joi');

const userRegisterValidation = (data)=>{
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        email: Joi.string().email().min(2).max(100).required(),
        password: Joi.string().min(6).max(16).required(),
        cep: Joi.string().min(8).max(8).required(),
        uf: Joi.string().min(2).max(2).required(),
        city: Joi.string().min(2).max(100).required(),
        street: Joi.string().min(2).max(100).required(),
    })
   return schema.validate(data)
}

const userLoginValidation = (data)=>{
const schema = Joi.object({
    email: Joi.string().email().min(2).max(100).required(),
    password: Joi.string().min(6).max(16).required()
})
return schema.validate(data)
}

module.exports.userRegisterValidation = userRegisterValidation
module.exports.userLoginValidation = userLoginValidation