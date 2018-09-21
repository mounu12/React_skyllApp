const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ModulesSchema=new Schema({
    modulename:{
        type:String
    },
    topic1:{
        type:String
    },
    timeperiod1:{
        type:String
    },
    time1:{
        type:String
    },
    topic2:{
        type:String
    },
    time2:{
        type:String
    },
    timeperiod2:{
        type:String
    }
})

const Modules=mongoose.model('modules',ModulesSchema)



Modules.aggregate([
    {
      "$project":{
    //    "modulename":"Module1",
       "topics": { "$ifNull" : [ "$topics", [ ] ] } 
      }
    },
//     {
//      "$unwind": {
//          "path": "$topics",
//          "preserveNullAndEmptyArrays": true
//       }
//   }, 
  {
   "$lookup": {
       "from": "topics",
       "localField": "topics._id",
       "foreignField": "_id",
       "as": "topics.topic"
   }
},
// { "$unwind": "$topics._id" },
{
"$group": {
 "_id": "$_topics",
//  "modulename" : { "$first": "$modulename" },
 // "doctorid" : { "$first": "$doctorid" },
 // "medicalcondition" : { "$first": "$medicalcondition" },
 // "diagnosis" : { "$first": "$diagnosis" },
 // "addmissiondate" : { "$first": "$addmissiondate" },
 // "dischargedate" : { "$first": "$dischargedate" },
 // "bhtno" : { "$first": "$bhtno" },
 "topics" : { "$push": "$topics" }
}
}
   ]);



module.exports=Modules;