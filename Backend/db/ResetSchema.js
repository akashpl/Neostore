const mongoose=require('mongoose');

const ResetSchema=new mongoose.Schema({
    email:{
        type: String,
        
    },
    
    data:[]


})

module.exports=mongoose.model('Reset',ResetSchema)