
const mongoose=require("mongoose");
const {Schema}=mongoose;

const userSchema=new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    contact_no:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
});
const User = mongoose.model('user', userSchema);
module.exports = User;