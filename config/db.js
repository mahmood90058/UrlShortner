import mongoose from "mongoose";

const connectDb=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected")

    }
    catch(error){
        console.log(`Error in mongodb ${error}`)
    }
}


export default connectDb;