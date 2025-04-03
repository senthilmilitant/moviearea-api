import mongoose from "mongoose"
import dotenv, { config } from 'dotenv'

dotenv.config()

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected....")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDB;