require("dotenv").config();
const express = require("express");
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const logger = require('morgan')
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const Multer = require("multer");


const itemRoutes=require('./routes/itemsRoutes')
const userRoutes=require('./routes/authRoutes')

dotenv.config()
const app = express()
mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongoDB')
})

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())
app.use(logger('dev'))
app.use('/user', userRoutes)
app.use('/items', itemRoutes)



app.listen(3000, () => {
    console.log('App is listening!')
})
