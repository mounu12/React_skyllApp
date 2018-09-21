 const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CarouselsSchema=new Schema({
    image: {
        type: String
    }
  
});
const Carousels=mongoose.model('carousels',CarouselsSchema)
module.exports=Carousels;