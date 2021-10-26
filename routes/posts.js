const express = require('express');
const validateJwt = require('../jsonwebtoken/validateJwt')
const router = express.Router();

router.get('/',validateJwt,(req,res)=>{
    res.json({
        posts:[
    {
        title: 'test1',
        author: 'tester1'
    },
    {
        title: 'test2',
        author: 'tester2'
    }
    ]
})
})

module.exports = router