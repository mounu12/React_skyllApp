'use strict';

module.exports = {

  up(db, next) {
    var topics=db.collection('topics');
    topics.insertMany([
    {topic1:"Java Basics",timeperiod1:"3days",time1:"1hr 30min"},
    {topic2:"Oops Concepts",time2:"2hrs",timeperiod2:"10days"},
    {topic3:"Basics of JDBC",timeperiod3:"3days", time3:"1hr 30min"},
    {topic4:"Simple Java Application",time4:"2hrs",timeperiod4:"7days"},
    {topic5:"Web Services",timeperiod5:"10days",time5:"1hr 30min"},
    {topic6:"XML Concepts",time6:"2hrs",timeperiod6:"10days"},
    {topic7:"Live Project",time7:"2hrs",timeperiod7:"25days"}
    

    ],next);
    
    next();
  },

  down(db, next) {
    // TODO write the statements to rollback your migration (if possible)
    next();
  }

};