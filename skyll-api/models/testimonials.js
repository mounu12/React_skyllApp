 const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TestimonialSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String
    },
    linkedinurl:{
        type:String
    },
    twitterurl:{
        type:String
    },
    degree1:{
        type:String
    },
    degree2:{
        type:String
    },
    address:{
        type:String
    }
    ,
   image:{
       type:String
   }
})
const Testimonials=mongoose.model('testimonials',TestimonialSchema)
module.exports=Testimonials;