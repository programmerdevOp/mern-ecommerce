import mongoose from "mongoose";

const connectDb = async() =>{ 
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connect successfully');
    } catch (error) {
        console.log(`error found ${error.message}`);
    }
}

export default connectDb;