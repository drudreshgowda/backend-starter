import mongoose from "mongoose";
import mongoosefrom  from "mongoose";

const Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
   },
   password:{
    type:String,
    required:true,
   },
  
},
{timestamps:true},
)

export const User=mongoose.model("user",Userschema);