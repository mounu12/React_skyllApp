import React,{Component} from 'react';
import axios from 'axios';

import { Link} from 'react-router-dom';
require('../css/program.css');
class Program extends React.Component {
render() {
  return (
    <div className="programApp">
  {/* <div className=" reskillcontent reskillmargin"> */}
<div className="col-md-12 modal-row ">


</div>
<div className="container">
<p className="col-md-10 col-md-offset-1 skilcontent">A program catered to meet the demands on a new age software engineer.
   The program gives an experience certificate of one year after the successful completion of tests, assignments and projects in the program.
    The incubent will be taken into a world of technologies, with hands on do it yourself approach, 
    the candidate will be able to survive the hardships of any IT Job there after.</p>
    <div className="container">
<div className="row extrabtn">
<div className="col-md-8 col-md-offset-2"> 
<div className="col-md-2">
<Link className=" btn applybtn" to="/howto"><span className="txtclr"><b>HOW TO</b></span></Link>
</div>
<div className="col-md-3 col-md-offset-2">
<Link className="btn applybtn" to="/apply"><span className="txtclr"><b>APPLY</b></span></Link>
</div>
<div className="col-md-3 col-md-offset-1">
<Link className="btn applybtn" to="/faq's"><span className="txtclr"><b>FAQ</b></span></Link>
</div>
</div>
</div>
</div>
   <h3 className="col-md-10 col-md-offset-1"> Advantages of the program</h3>
 <li className="col-md-10 col-md-offset-1 skilstyle">6 months skilling - carries an experience certificate</li>
<li className="col-md-10 col-md-offset-1 skilstyle">Survival skills taught - Learn any new technology with ease</li>
<li className="col-md-10 col-md-offset-1 skilstyle">No lectures, no classrooms; Do it your self</li>
 <li className="col-md-10 col-md-offset-1 skilstyle">Assignments and projects to make the candidate seasoned professional</li>
<li className="col-md-10 col-md-offset-1 skilstyle"> 6 months experience is equal to 3 years experience in the industry*</li>
</div>
<hr/>
<h3 className="text-center">Integrated Program In Software Engineering</h3>

  <div className="container">
        <div className="col-md-10 col-md-offset-1 reskillcontent reskillmarginone">
        <div className="row programdata">
       <div className="col-md-4 modal-row-inner">
       <h3>Module1</h3>
       <div className="modulestyle"><b>(Java Programming Language)</b></div>
      
      </div>
     
       <div className="col-md-8 modal-row-inner">
        <div className=" modulecontent ">  
        <h3>Topics:</h3>
             <li>Object oriented programming</li>
               <li> Introduction To Java Programming Language</li>
                 <li>Java Collections and Data Structures</li>
               <li> Basic Design patterns</li>
                <li>Multi-Threading</li>
               <li> Writing Unit Tests using JUnit, TestNG</li>
                <li>Class Loader & Garbage Collection</li>
                <h4>Assignments:15</h4>
        
        </div>
        </div>
        </div>
        </div>
       
        <div className="col-md-10 col-md-offset-1 reskillcontent">
        <div className="row programdataone">
        <div className="col-md-4 modal-row-inner">
       <h3>Module2</h3>
       <div className="modulestyle"><b>(HTML/CSS/BootStrap and Basic Java Script)</b></div>
      </div>
      <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
                <li>HTML/CSS</li>
                <li> TwitterBootStrap</li>
                <li>XML/JSON/XHTML</li>
                <li>Basic Java Script</li>
                <h4>Assignments:15</h4>
          </div>
      </div>
       </div>
       </div>
     
       <div className="col-md-10 col-md-offset-1 reskillcontent">
       <div className="row programdataone">
       <div className="col-md-4 modal-row-inner">
       <h3>Module3</h3>
       <div className="modulestyle"><b>(Ant, Maven, Github, Tomcat Server)</b></div>
       </div>
       <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
              <li>Basics of Ant</li>
             <li> Building Projects with Maven</li>
             <li> Using Github for checkin and Checkout</li>
              <li>Starting and Stoping Tomcat Server - Dir Structure;</li>
             <li>Deploying a Web Application on Tomcat</li>
             <li> Deploying a Web Application on Jetty</li>
                <h4>Assignments:15</h4>
          </div>
      </div>
       </div>
       </div>
       <div className="col-md-10 col-md-offset-1 reskillcontent ">
       <div className="row programdataone">
        <div className="col-md-4 modal-row-inner">
       <h3>Module4</h3>
       <div className="modulestyle"><b>(Servlets and JSP's)</b></div>
       </div>
       <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
       <li>Servlets and Java Server Pages - Programming</li>
            <h4>Assignments - 5</h4>
              <h4>Projects - 1</h4>
      </div>
      </div>
      </div>
     </div>
     <div className="col-md-10 col-md-offset-1 reskillcontent">
      <div className="row programdataone">
        <div className="col-md-4 modal-row-inner">
       <h3>Module5</h3>
       <div className="modulestyle"><b>(Database Fundamentals)</b></div>
       </div>
       <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
          <b> MySQL Installation</b>

           <li> Database Tables</li>
            <li>Foreign Key Relationships</li>
            <li>Database Modelling, architecting Database Tables</li>
           <li> Database Joins</li>
           <li> JDBC Programs</li>
            <li>Writing Unit Tests with Mockito</li>
            <h4>Assignments - 5</h4>
            <h4>Projects - 2</h4>
            </div>
            </div>
       </div>
       </div>
       <div className="col-md-10 col-md-offset-1 reskillcontent ">
       <div className="row programdataone">
        <div className="col-md-4 modal-row-inner">
       <h3>Module6</h3>
       <div className="modulestyle"><b>(Python)</b></div>
       </div>
       <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
            <li>Basics of Python Language</li>
            <li>NumPy and Pandas</li>
           <li> Basics of Machine Learning  and Artificial Intelleigence AI/ML</li>
           <h4>Assignments - 5</h4>
           </div>
           </div>
      </div>
      </div>
      <div className="col-md-10 col-md-offset-1 reskillcontent">
      <div className="row programdataone">
        <div className="col-md-4 modal-row-inner">
       <h3>Module7</h3>
       <div className="modulestyle"><b>(Big Data and Hadoop)</b></div>
       </div>
       <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
          <li> Hadoop Installation</li>
          <li> Hadoop Programing</li>
          <h4>Assignments - 5</h4>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-10 col-md-offset-1 reskillcontent ">
        <div className="row programdataone">
        <div className="col-md-4 modal-row-inner">
       <h3>Module8</h3>
       </div>
       <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
              <li> Basics of Cloud Computing</li>
              <li> AWS Cloud</li>
              <li>VPC, VM, Container, S3, Route53, Public IP, S3. etc..</li>
              <li>  Deploying Tomcat Server and Applications on Cloud</li>

              <h4>Project - 1</h4>
              </div>
              </div>
              </div>
              </div>
              <div className="col-md-10 col-md-offset-1 reskillcontent">
              <div className="row programdataone">
        <div className="col-md-4 modal-row-inner">
       <h3>Module9</h3>
       <div className="modulestyle"><b>(Specialization projects - 1 each)</b></div>
       </div>
       <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
            <li>Angular + Node.js</li>
            <li>React + Node.js</li>
            <li>Java/Spring/MVC and Hibernate</li>
           <li> BigData + Hadoop</li>
           <li> AWS Cloud Management - Devops</li>
           <li> AI/ML Work + Python</li>
           </div>
           </div>
           </div>
       </div>
          <div className="col-md-10 col-md-offset-1 reskillcontent">
              <div className="row programdataone">
        <div className="col-md-4 modal-row-inner">
       <h3>Module10</h3>
       <div className="modulestyle"><b>( Approach to Building Products from Scratch)</b></div>
       </div>
       <div className="col-md-8 modal-row-inner">
          <div className=" modulecontent ">
          <h3>Topics:</h3>
            <li>Software Development process</li>
            <li>UI engineering</li>
            <li> Business Analysis </li>
           <li>  Development and</li>
           <li> Deployment and Testing</li>
          
           </div>
           </div>
           </div>
       </div>
       </div>
        </div>
        // </div>
  
   
       
  )}
}
export default Program;












// state = {modules: []}

//   componentWillMount() {

//     axios.get('http://localhost:8000/api/modules').then(response=> {
//       console.log(response.data);
//     this.setState({modules:response.data});
//     })

//     .catch((err)=> {})
      
//   }
//   createtopic(){
//     return this.state.modules.topic1.map((user)=>{
//     console.log(user);
//     })
//   }
//   createoptions(){
//     return this.state.modules.map((module)=>{
      
//       return(
        
//         <div className="container">
//         <div className="row">
//         <div className="programpage">
//         <div className="col-md-8 col-md-offset-2 modal-content">
//        <div className="col-md-3 modal-row-inner">
//        <h3>{module.modulename}</h3>
//        </div>
//        <div className="col-md-8 modal-row-inner">
//        <div className=" modulecontent ">
//        <h4><b>Topic1: </b>{module.topic1}</h4>
//        <h4><b>TimePeriod:</b> {module.timeperiod1}</h4>
//        <h4><b>Timing:</b> {module.time1}</h4>
      
//        <hr/>
//        <div className=" modulecontent ">
//        <h4><b>Topic2: </b>{module.topic2}</h4>
//        <h4><b>TimePeriod:</b> {module.timeperiod2}</h4>
//        <h4><b>Timing: </b>{module.time2}</h4>
//        </div>
//        {/* <div className=" modulecontent ">
//        <h4>topic3: {module.topic3}</h4>
//        <h4>TimePeriod: {module.timeperiod3}</h4>
//        <h4>Timing: {module.time3}</h4>
//        </div> */}
//        </div>
//        </div>
//        </div>
//        </div>
//      </div>
//      </div>
//       )

//   })
  
// }

// render() {
 
//   return (
//     <div className="Appone">
//        <h1></h1>
      
//       {this.createoptions()}
      
//     </div>
//   );
// }