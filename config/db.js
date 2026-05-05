import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/yourDBname")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb