import React from 'react';
import Collapsible from 'react-collapsible';
require('../css/faq.css');

// import Accordion from 'react-responsive-accordion';

class faq extends React.Component{
    render(){
        return(
            <div className="faqApp">
            
                <div className="col-md-10 col-md-offset-1 faqpic">


            </div>
          <div className="container-fluid">
           <div className="col-md-8 col-md-offset-2">
           <Collapsible trigger="What is course Fees?">
        <p>The course fee is 75,000/- for six months; Paid in 3 installments; 
   There is a discount available as part of the pre-launch offer</p>
      </Collapsible>
      <Collapsible trigger="Is it internship?">
        <p>Yes it is Intership and you will get an experience certificate from the company;
        It will be 6 months or 1 year experience based on the passing year</p>
      </Collapsible>
      <Collapsible trigger="Will be there a stipend?">
        <p>No</p>
      </Collapsible>
      <Collapsible trigger=" What is reskilling?">
        <p> It is for experienced professionals to get back into career development mode rather than becoming obsolete</p>
      </Collapsible>
      <Collapsible trigger="Why this program is better compared to Ameetpet courses and also Udemy Courses?">
        <p>  IN Ameerpet, things are taught on the board. Little practice and also depends on the candidate. There are good success stories in Ameerpet too.
   However, at iSkill, we inculcate Do it yourself mode. No lectures, no teaching, only assignments and practice. More over it is going to be comprehensive learning. It means, 
   the skills practiced here are the ones used in the industry. The source code reviews, comments, commits, unit testing and the philosophy is going to be different here compared to Ammerpet. A student can survive all my himself at the of the program. It is an integrated program for one to become a full stack developer.</p>
      </Collapsible>
      <Collapsible trigger="What is a specilizaion?">
        <p>  IN six months lots of assignments, and projects are done to become a full stack developer. Three months of specialiation is for the folks to choose a stream and become an expert in that area.</p>
      </Collapsible>
      <Collapsible trigger=" How deep is BigData and Machine Learning Course.">
        <p> The important thing is to learn the fundamentals. Once the fundamentals are clear, the learner can become an expert. It is with this intention, we look at Machine Learning and BigData</p>
      </Collapsible>
      <Collapsible trigger="Can I choose the carrer I want as a specilization? ">
        <p> Yes. It is your choice. For projects, you may be assigned different role based on what is required.</p>
      </Collapsible>
      <Collapsible trigger=" No lectures at all? How does the candidate learn?">
        <p>There will be folks helping you to read, understand and present yourselves in the class.
   This is to improve your comminication skills and also make you fit for an enterprise development environment</p>
      </Collapsible>
      <Collapsible trigger=". Do you offer placement?">
        <p> We assist you guys in the placement. we are working on getting some companies interview.
    However, we do not want to promise at this time. We are also 100% sure that, we will be places very soon with good packages.</p>
      </Collapsible>
 
     </div>
     </div>
 
      </div>


        )
    }
}
export default faq;