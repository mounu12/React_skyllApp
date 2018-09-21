 const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const PersonsSchema=new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    overview:{
        type:String
    },
    currentwork:{
        type:String
    },
    degree1:{
        type:String
    },
    degree2:{
        type:String
    },
    linkedinurl:{
        type:String
    },
    twitterurl:{
        type:String
    },
    emailid:{
        type:String
    },
    joinedon:{
        type:String
    },
    passedon:{
        type:String
    },
    salary:{
        type:Number
    },
    hidesalary:{
        type:Boolean
    }
    







});
const Persons=mongoose.model('persons',PersonsSchema)
module.exports=Persons;