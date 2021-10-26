const jwt = require('jsonwebtoken');

const validateJwt =  (req,res,next)=>{

  try{ 
    const token = req.cookies.authToken
    
     const validToken = jwt.verify(token,process.env.JWT_SECRET)
    req.user = validToken
     next()
 } catch(err){
     res.status(400).json({error:'Invalid token, you must be logged! '})
}
}

module.exports = validateJwt