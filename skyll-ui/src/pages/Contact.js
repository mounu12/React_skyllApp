import React from 'react';
import axios from 'axios';
class Contact extends React.Component {
    state={
        name:'',
        email:'',
        phonenumber:'',
        message:''
    }
    sendmessage(event){
    event.preventDefault();
        var self=this;
        var messagedetails={
            "name":this.state.name,
            "email":this.state.email,
            "phonenumber":this.state.phonenumber,
            "message":this.state.message
        }
        console.log(messagedetails);
           axios.post('http://localhost:8000/api/contactus',messagedetails).then(response =>{
            console.log(response.data);
        })
    }  
  render() {
    return (
    <div  className="contactApp">
      
        <div className="image-aboutus-banner">
    <div className="container">
     <div className="row">
         <div className="col-md-12">
          <h1 className="lg-text">About Us</h1>
          <p className="image-aboutus-para">
          The vision is create opportunities for hungry and ambitious engineers to thrive<br/> and innovate in an open and free world. To achive this, we have taken up an ambitious goal <br/>of picking engineers from rural and semi-rural background, put them through<br/> a intensive do-it-yourself experience process.<br/>
          
          The company is founded with a passion for building products.<br/>
          Product making is part of the company's DNA. Discount on Demand, Testing Framework,<br/> IOT Platform, iSchool, iLIbrary, SmartRide are some of the products.
          </p>
        </div>
     </div>
 </div>
 </div>
    <section className="contact" id="contact">
<div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4  contactheading text-center" >
                    <h2 className="section-heading">CONTACT US</h2>
                    <hr className="star-light" />
                
                    {/* <h3 className="section-subheading"></h3> */}
                </div>
            </div>
            <div className="row" >
                <div className="col-lg-12">
                    <form className="sentMessage" id="contactForm" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." onChange={(event) => this.setState({name:event.target.value}) } />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." onChange={(event) => this.setState({email:event.target.value}) } />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number."  onChange={(event) => this.setState({phonenumber:event.target.value}) } />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message. " onChange={(event) => this.setState({message:event.target.value}) } ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success" >
                                <button type="submit" className="btn btn-info send-button" onClick={(event)=>this.sendmessage(event)}>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
   
</section>
</div>

     ) }
}

export default Contact;