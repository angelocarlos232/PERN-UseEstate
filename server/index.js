import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'


dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Mongodb connected")
}).catch(() => {
    console.log("Mongodb not connected")
})

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true // Allow credentials (cookies)
  }));
app.use(express.json())
app.use("/api/user", userRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;  
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

