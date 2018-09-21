const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BasicformSchema=new Schema({
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
    companyname:{
        type:String
    },
    functionalrequirements:{
     type:String
    },
    technicalrequirements:{
        type:String
    }



})
const BasicForm=mongoose.model('basicform',BasicformSchema)
module.exports=BasicForm;