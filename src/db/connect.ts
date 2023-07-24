import mongoose from "mongoose";

let uri='mongodb+srv://ridasbnesalmas:123@ridacluster.nixyljy.mongodb.net/blog'
// connect to mongoDB
 const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully')
    } catch (err : any) {
        console.log('Failed to connect to MongoDB:', err.message);
        process.exit(1);
    }
}
export default connectDB;