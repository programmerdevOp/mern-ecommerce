//const express = require('express')
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'


dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use('api/auth', authRoutes)
app.use('api/products', productRoutes)


connectDb();

app.get('/', (req, res)=>{
    res.send('API is running...');
})

app.listen(5001, ()=>{
    console.log(`server is running on port 5001`);
})

