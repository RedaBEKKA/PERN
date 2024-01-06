import express from 'express';
import { PORT } from './constants/index.js';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';
import authRoutes from "./routes/auth.js"
const app = express()


app.use('/api',authRoutes)
const appStart = () =>{
    try {
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }   
}

appStart()