'use strict';

module.exports = {

  up(db, next) {
    // TODO write your migration here
    var testimonials=db.collection('testimonials');
    testimonials.insertMany([{id:0,name:"Varun K",linkedinurl:"https://www.linkedin.com/in/varun-raghavendra-63110850/",twitterurl:"https://www.linkedin.com/in/varun-raghavendra-63110850/",degree1:"M.Tech",degree2:"B.Tech",address:"Khammam,Telangana",image:"/images/varun.jpg",comment:"Iskill is one of the best ways for a fresher to get their dream IT job. I heartily thank the Iskill team for being the major reason for my  success. Thank you for the support."},
                            {id:1,name:"Vijay D",linkedinurl:"https://www.linkedin.com/in/vijay-s-devarakonda-b1628b29/",twitterurl:"https://twitter.com/vijaydevarkonda?lang=en",degree1:"M.Tech",degree2:"B.Tech",address:"Hyderabad,Telangana",image:"images/vijay.jpg",comment:"Iskill is a great platform to gain Knowledge and success. I came to know about Iskill through Internet. I recommend everyone to be a part of Iskill.Thanks to Iskill for making me to learn something beyond the Technical things going on. Thanks a lot to Iskill, for making myself self-driven. I am happy to be a part of Iskill. Thanks a lot!!!!!"},
                            {id:2,name:"Sindhura N",linkedinurl:"https://www.linkedin.com/in/sindhura-nellibandla-10a3a236/",twitterurl:"https://twitter.com/chamalasindhura?lang=en",degree1:"M.Tech",degree2:"B.Tech",address:"Vijayawada,Andhra Pradesh",image:"/images/sindhu.jpg",comment:"Iskill is a treasured memory in  my life. I learned a complete package from the basic level. The resources  provided by Iskill are the key for my success. The major resources Iskill provide are Daily asiignments,mock test,best guidance.  Though I went to Iskill with the zero knowledge on java at the end of the course I made top in the exam conducted in Iskill with zeal of learning. As per my knowledge Iskill is completely different from other institutes, here we will gain practical knowledge in addition to theory. I got placed in CG International, which is a Multinational Company. The things which I learned in core java  and while doing the project helped me the most to crack the interview. Thank you Iskill and specially for each and every trainer who taught me and helped me to become a successful person."}])
    next();
  },

  down(db, next) {
    // TODO write the statements to rollback your migration (if possible)
    next();
  }

};