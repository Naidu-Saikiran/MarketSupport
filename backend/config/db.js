import mongoose from 'mongoose'
import * as dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.REACT_APP_MONGO_URI)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.REACT_APP_MONGO_URI, {
                 useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            })
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;