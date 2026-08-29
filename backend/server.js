//const express = require('express')
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js';


dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());


connectDb();

app.get('/', (req, res)=>{
    res.send('API is running...');
})

app.listen(5001, ()=>{
    console.log(`server is running on port 5001`);
})

