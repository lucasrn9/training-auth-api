const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const usersRoute = require('./routes/users')
const postsRoute = require('./routes/posts')
const app = express();

dotenv.config()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', //change this according to your request origin
    credentials: true
}))
mongoose.connect(process.env.DB_CONNECTION,()=>console.log('Connected to DB'))

// routes middlewares
app.use('/users',usersRoute)
app.use('/posts',postsRoute)

//port config
const port = process.env.PORT || 3333
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
    console.log('Connecting to DB ...')
})