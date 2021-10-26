const express = require('express');
const router = express.Router();
const {User} = require('../models/userRegister')
const {userRegisterValidation,userLoginValidation} = require('../validationSchemas/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res)=>{
    //Joi validation
    const {error,value} = userRegisterValidation(req.body)
    if(error){
        return res.status(400).json(error.details[0].message)
    }

    const{name,email,password,cep,uf,city,street} = value
    //Checking if user already exists in DB
    const userFound = await User.findOne({email: email})

    if(userFound){
        return res.status(400).send('User already exists')
    }
    //Hashing password to save in DB
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    //Registering a new user in DB
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
        cep: cep,
        uf: uf,
        city: city,
        street: street,
    })
   user.save().then(user=>res.json(user)).catch(()=>res.status(400).send('Registration error, please check the paths and try again later'))
})

router.post('/login',async (req,res)=>{
//Joi validation
const {error,value} = userLoginValidation(req.body)
if(error){
    res.status(400).send(error.details[0].message)
}
const {email,password} = value
//Authenticating user
const findUser = await User.findOne({email: email})
if(findUser===null){
    return res.json({message: 'Email or password invalid'})
}
const authPass = await bcrypt.compare(password,findUser.password)
//Creating JWT
if(!authPass){
    res.status(400).json('Email or password invalid')
}
else{
const token = jwt.sign({_id: findUser._id},process.env.JWT_SECRET)
res.cookie('authToken',token,{httpOnly: true})
res.json({message: 'You have received a cookie with your auth token !'})
}
 
})

router.post('/logout',(req,res)=>{
    res.clearCookie('authToken').json({message: 'login cookie has been cleaned'})
})

module.exports = router