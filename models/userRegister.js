const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100
    },
    cep: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 8
    },
    uf: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    city: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    street:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports.User = mongoose.model('User',userRegisterSchema)