import React from 'react';

class About extends React.Component {
  render() {
    return <div className="container about" id="about">
   <div className="row">
      <div className="col-lg-12 text-center">
         <h2 className="section-heading">ABOUT US</h2>
         <hr className="star-light" />
         {/* <h3 className="section-subheading"></h3> */}
     </div>
   </div>
   <div className="row">
      <div className="col-lg-6 ">
         <div className="about-para-bar col-lg-12 reset-padding reset-margin">
          
            <div className="col-lg-2 reset-padding reset-margin">
              
            </div>
         </div><br />
         <p>As Toptal’s Head of Projects, Alan works with Toptal clients to deliver strategic software projects, driving innovation through Agile methodologies. A former Principal Consultant at ThoughtWorks, Alan has delivered complex, mission-critical technology projects across a range of industries, including Financial Services, Oil and Gas, and Payments Processing. He has leveraged a passion for lean, Agile practices and a deep understanding of global delivery models to help internationally recognized firms adopt Agile delivery practices and implement digital transformation initiatives over the last 25 years of his career in technology leadership..</p>
         <p>We have a team on board with experience in working international schools.</p><br />
         <p>As parents, we have shown keen interest in the students wisdom, mental health, well being After researching into schools that are topping the list every year, we have come across several features of the school.</p><br />
         <hr className="hr-teal" />
         
      </div>
      <div className="col-lg-6 "  >
         <img src="images/aboutus.jpg" alt=""/>
      </div>
   </div>

   <div className="row" >
       <div className="col-lg-6 ">
        
         <img src="images/aboutus2.jpg" alt=""/>
      </div>

      <div className="col-lg-6 ">
         <div className="about-para-bar col-lg-12 reset-padding reset-margin">
             <h2>Research</h2>
            <div className="col-lg-2 reset-padding reset-margin">
             
            </div>
         </div><br />
         <p>The research gave us very simple results. The school are not great because of big buildings or big fees.</p>
         <p>The school is great because of its teachers and teachers followed simple techniques.</p><br />
         <p>Once we found this, we thought of giving this best techniques to all the schools.</p>
         <p>At the moment we have decided to build a software a software that can take some of the features into adoptng for day at every school. </p><br />
         <hr className="hr-teal" />
         
      </div>
      
  </div>
</div>
  }
}
export default About;


