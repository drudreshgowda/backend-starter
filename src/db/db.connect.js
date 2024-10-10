import mongoose from "mongoose";

const connectDB= async (req,res)=>{
    try{
        await mongoose.connect(process.env.DB_url);
        console.log("the database successfully")
    }catch(error){
        console.log(error);
        process.exit(1);
    }
    
};
export { connectDB };