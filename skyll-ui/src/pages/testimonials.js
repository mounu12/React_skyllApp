import React,{Component} from 'react';
import axios from 'axios';
var Twitter = require('react-icons/lib/fa/twitter-square');
var Linkedin=require('react-icons/lib/fa/linkedin-square');
require('../css/testimonials.css');

class Testimonial extends React.Component{
    state={testimonials:[]}

     componentWillMount() {
  
   axios.get('http://localhost:8000/api/testimonials').then(response=> {
        console.log(response.data);
      this.setState({testimonials:response.data});
      })
      
  }
    createoptions(){
  
    var imagestyle={
        height:'208px',
        width:'158px',
        borderRadius:'6px'
    }
    return this.state.testimonials.map((user)=>{
    
    return(
       
      <div className="row ">
          <div className="col-md-12 productstop">
              <div className="mainbox">
                  <div className="row productone">
                       <div className="col-md-3 text-center">
                      <img src={user.image} style={imagestyle} alt=""></img>
                      </div> 
                      
                      <div className="col-sm-6 col-md-9">
                        <div className="personname">
                          <h4 className="personname">{user.name}</h4>
                        </div>
                          <div className="personqualification"><b>{user.degree2}</b></div>
                          <div className="personcountry">{user.address}</div>
                          <div className="personoverview">{user.comment}</div>
                      </div>
                  </div>
                  {/* <hr/> */}
                  <div className="row productone">
                    <div className="col-lg-3">
                    
                    </div>
                    <div className="col-lg-9 text-right ">
                      
                      
                          <a className="twitterlink" href={user.twitterurl}><Twitter size={30} color={'#00a1ee'}/></a>
                         
                      
                      
                        <a className="linkedinlink" href={user.linkedinurl}><Linkedin size={30} color={'#0077b2'}/></a>
                      
                     
                        {/* <a href="/moreabout" onClick={(e) => this.handleClick(e,user)}><b>More....</b></a> */}
                   
                       
                   

                    </div>
                 </div> 
           
              </div>
          </div>
        
      </div>
  
    )
    })
    }
    render(){
        return(
          <div className="testimonialmargin">
                <div className="App">
         <h2></h2>
         <div className="container-fluid">

         

         <div className="row">
         <div className="col-md-10 col-md-offset-1 testimonialpic">
            </div>


            </div>
           
           <div className="col-lg-8 col-md-offset-2">
             {this.createoptions()}
             </div>
           
           </div>
       
      
      </div>
      </div>
    
        )
    }
}
export default Testimonial