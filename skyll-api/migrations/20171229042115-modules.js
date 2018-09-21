'use strict';

module.exports = {

  up(db, next) {
    var modules=db.collection('modules');
    modules.insertMany([
      // {modulename:"Module1",topic1:"Java Basics",timeperiod1:"3days",time1:"1hr 30min",topic2:"Oops Concepts",time2:"2hrs",timeperiod2:"10days",projects:{project1:{summary:"summary",description:"Detailed Description",result:"Expected Result"}}},
      // {modulename:"Module2",topic1:"Basics of JDBC",timeperiod1:"3days",time1:"1hr 30min",topic2:"Simple Java Application",time2:"2hrs",timeperiod2:"7days"},
      // {modulename:"Module3",topic1:"Web Services",timeperiod1:"10days",time1:"1hr 30min",topic2:"XML Concepts",time2:"2hrs",timeperiod2:"10days",topic3:"Live Project",time3:"2hrs",timeperiod3:"25days"}
      {modulename:"Module1",topics:[{id:"5a4b57f8e370da1718fe3ef3"}]},
      {modulename:"Module2"},
      {modulename:"module3"}
    ],next);
    
    next();
  },

};