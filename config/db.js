import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://ankitraj1616aug:dS8mzityUo2c39RT@cluster0.yxs41zz.mongodb.net/virtualassistent?appName=Cluster0")
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb