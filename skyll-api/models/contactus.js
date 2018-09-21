const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const ContactUsSchema= new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phonenumber:{
        type:String
    },
    message:{
        type:String
    }
})
const ContactUs=mongoose.model('contactus',ContactUsSchema)
module.exports=ContactUs;