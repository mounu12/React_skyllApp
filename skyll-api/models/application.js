const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//create schema and model
const ApplicationSchema=new Schema({
	name:{
		type:String,
		required:[true,'Name field is required']
	},
    email:{
        type:String,
     
    },
    contactnumber:{
        type:String
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    degree:{
        type:String
    },
    degreepercentage:{
        type:String
    },
    degreepassingyear:{
        type:String
    },
    intermediate:{
        type:String
    },
    interpercentage:{
        type:String
    },
    interpassingyear:{
        type:String
    },
    ssc:{
        type:String
    },
    sscpercentage:{
        type:String
    },
    sscpassinyear:{
        type:String
    },
    fathername:{
        type:String
    },
    mothername:{
        type:String
    },
    parentsoccupation:{
        type:String
    }





});
const Application=mongoose.model('application',ApplicationSchema)
module.exports=Application;