import React,{Component} from 'react';
// import { Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
// import Collapsible from 'react-collapsible';
import Icon from 'react-icons-kit';
import { users } from 'react-icons-kit/icomoon/users';
import { userCheck } from 'react-icons-kit/icomoon/userCheck';
import { userTie } from 'react-icons-kit/icomoon/userTie'; 
// import { checkmark } from 'react-icons-kit/icomoon/checkmark'; 
// import { cross } from 'react-icons-kit/icomoon/cross';
// import Collapsible from 'react-collapsible';
import Modal from 'react-responsive-modal';
// import ReactTable from "react-table";
// import "react-table/react-table.css";
import axios from 'axios';
// var Carousel = require('react-responsive-carousel').Carousel;



 export default class Home extends React.Component {
  state = {images: [],
    name:'',
    email:'',
    contactnumber:'',
    companyname:'',
    functionalrequirements:'',
    technicalrequirements:''}

applyform(event){
  event.preventDefault();
  var self= this;
  var formdetails={
    "name":this.state.name,
    "email":this.state.email,
    "contactnumber":this.state.contactnumber,
    "companyname":this.state.companyname,
    "functionalrequirements":this.state.functionalrequirements,
    "technicalrequirements":this.state.technicalrequirements
  }
    console.log(formdetails);
    axios.post('http://iskyll.com:8000/api/basicapplication',formdetails).then(response =>{
        console.log(response.data);
    })
}
 
  // state = {
  //   open: false,
  // };
  
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

   
    componentWillMount() {
    
  
      axios.get('http://localhost:8000/api/carousels').then(response=> {
        console.log(response.data);
      this.setState({images:response.data});
      })
  
      .catch((err)=> {})
        
    }
    handleClick() {
      this.setState({
        show: !this.state.show
      });
    }
   
  createoptions(){
    return this.state.images.map((imagecaro)=>{
      console.log(imagecaro);
    return(
      <div className="row carousel-top">
      <div className="carouselheight">
      <img
         style={{width:"100%",height:"100%"}}
        src={imagecaro.image} alt="one"
      />
      <div className="carousel-caption">
        Image
      </div>
    </div>
      </div>
     ) 
    })
 
}
render() {
  console.log(this.state.images);

  const { open } = this.state;

  return (
  <div>
     <React_Bootstrap_Carousel
                // animation={true}
                // autoplay={true}
                slideshowSpeed={1500}
               
                // onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade">
                {this.createoptions()}
       
      </React_Bootstrap_Carousel>
   
      <section className="sch-feature-field">
      <div className="container">
         
         <div className="row">
            
            <div className="col-md-4 col-sm-6">
               <div className="sch-feature-box">
                  <div className="sch-feature-icon">
                  <div style={{ color:'#3863a0'}}>
                  <Icon size={80} icon={userCheck} />
                  </div>
                  </div>
                  <h3>Build Your Product</h3>
                  <p>iSkyll is a Smart Development Service combining top developers to build a successful product. iSkyll is a new standard in product development</p>
                  {/* <Link to="/buildteam">Read more</Link> */}
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div className="sch-feature-box">
                  <div className="sch-feature-icon">
                  <div style={{ color:'#3863a0'}}>
                    <Icon size={80} icon={userTie} />
                    </div> 
                  </div>
                  <h3>Build Your Team</h3>
                  <p>Get the best developers on your team; iSkyll gives a choice to pick and choose your team of specialists for your work. </p>
                  {/* <Link to="/hireteam">Read more</Link> */}
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div className="sch-feature-box ">
                  <div className="sch-feature-icon">
                  <div style={{ color:'#3863a0'}}>
                  <Icon size={80} icon={users} /></div>
                  </div>
                  <h3>Hire Your Team</h3>
                  <p>iSkyll is an exclusive network of the top highly skilled engineers available in India Top companies rely on iSkyll for their projects.</p>



               </div>
            </div>
         </div>
      
 
  
   <br/>
   <div className="col-lg-12 modal-camparisionimage">
   </div>

   
   <div className="col-md-6 col-md-offset-5">
       
        <button className="btn applybtn" onClick={this.onOpenModal}>
        <span className="txtclr"><b> GET STARTED</b></span>
        </button>{' '}
       
         
        <Modal
          open={open}
          onClose={this.onCloseModal}
          little
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
            overlay: 'custom-overlay', modal: 'custom-modal' ,
          }}
          animationDuration={1000}
        >
       

             
                 <form id="form" className="form-horizontal" role="form" name="studentregistrationform" >
                    <h4><u><b>Person Details</b></u></h4>
                    <div className="col-md-12">
                    <div className="left-side-form">
                  
                       <div className="row">
                          <div className="col-md-3">
                             <label> Name</label>
                          </div>
                          <div className="col-md-9">
                             <input type="text" className="form-control form-input" id="" name="name" placeholder="name*" onChange={(event) => this.setState({name:event.target.value}) }  required />
                          </div>
                       </div>
               <br/>
                       
                       <div className="row">
                          <div className="col-md-3">
                             <label>E-mail</label>
                          </div>
                          <div className="col-md-9 ">
                             <input type="email" className="form-control form-input" id="" name="e-mail" placeholder="xxxxxxxxx@yyyy.com*" onChange={(event) => this.setState({email:event.target.value}) } required />
                          </div>
                       </div>
                     <br/>
                       <div className="row">
                             <div className="col-md-3">
                                <label>Company Name</label>
                             </div>
                             <div className="col-md-9 ">
                                <input type="text" className="form-control form-input" id="" name="contactnumber" 
                                   placeholder="Company name*"  onChange={(event) => this.setState({contactnumber:event.target.value}) }
                                 required />
                             </div>
                          </div>
                          <br/>
                          <div className="row">
                             <div className="col-md-3">
                                <label>Contact Number</label>
                             </div>
                             <div className="col-md-9 ">
                                <input type="text" className="form-control form-input" id="" name="companyname" 
                                   placeholder="contact number*"  onChange={(event) => this.setState({companyname:event.target.value}) }
                                 required />
                             </div>
                          </div>
                          <br /> 
             
               
                       
                    </div>
                 </div>
                   
                <br/>
     
                 <hr />
                 <h4><u><b>Brief Description Of Requirement</b></u></h4>
                 <div className="row">
                          <div className="col-md-3">
                             <label> Functional</label>
                          </div>
                          <div className="col-md-9">
                             <input type="text" className="form-control form-input" id="" name="functionalrequirements" placeholder="name*" onChange={(event) => this.setState({functionalrequirements:event.target.value}) }  required />
                          </div>
                       </div>
                      <br/>
                       <div className="row">
                          <div className="col-md-3">
                             <label>Technical</label>
                          </div>
                          <div className="col-md-9">
                          <textarea rows="4" cols="40" name="technicalrequirements" className="form-control form-input" onChange={(event) => this.setState({technicalrequirements:event.target.value}) } required></textarea>
                       </div>
                       </div>
                       <br/>
                       <div className="row applystyle">
                  <div className="col-lg-12 col-md-offset-4text-center">
                      <div className="col-lg-4">
                     <button id="btn-reset" type="reset" className="btn button"> Reset</button></div>
                     <div className="col-lg-4">
                     <button id="btn-Register" type="submit" name="submit" onClick={(event)=>this.applyform(event)} className="btn button"  >Submit</button></div>
                  </div>
               </div>
                    </form>
                  
                   
             
        </Modal>
      </div>
      <br/>
      <h4>   </h4>
   {/* <div className="col-md-6 col-md-offset-5">
   
   <Link className=" btn applybtn" to="/howto"><span className="txtclr"><b>GET STARTED</b></span></Link>
   </div> */}

   <div className="col-md-10 col-md-offset-1">

   <div>
   <div className="col-md-12">

   <div className="col-md-6">
   <h4 className="hiresubheading">Build Your Product</h4>
    <h4 className="hireheading">iSkyll takes the ownership of Building the product</h4>
   </div>
   <div className="col-md-6">
   <h4>   </h4>
   
   <p className="iskillcontent">iSkyll is a Smart Development Service combining top developers to build a successful product.
iSkyll is a new standard in product development, creates high value, high quality custom software Devlivery on demand
Managed by iSkyll, bring in wiht your requirements and walk-away with a new product, with a high quality using our Rapid development approach
ISkyll provides the space, infrastructure and the machines to get build your product.
ISkypp provides the critical skills required to build a product, The Business Analysis, The Process Experts and highly skilled developers. IN this scheme, we own and build your product.</p>
   </div>
   
   
   </div>
   <div className="col-md-12">
   <div className="col-md-6">
   <h4 className="hiresubheading">Build Your Team</h4>
    <h4 className="hireheading">iSkyll takes the ownership of Building the Team.</h4>
   </div>
   <div className="col-md-6">
   <h4>   </h4>
  
   <p className="iskillcontent">Get the best developers on your team; iSkyll gives a choice to pick and choose your team of specialists for your work.
   You qucikly assemnle your team with our specialist services and you manage the team.
   We help you assemble, give you space and provide the infrastructure for your products
   We help you with the process expertise, business expertise and providing skilled developers.
   In this mode, we do not own the product. You own the product</p>
 
   </div>
   
   </div>
   <div className="col-md-12">
   <div className="col-md-6">
   <h4 className="hiresubheading">Hire Your Team</h4>
    <h4 className="hireheading">iSkyll gets the best developers to work</h4>
   </div>
   <div className="col-md-6">
   
   <h4>   </h4>
   <p className="iskillcontent">iSkyll is an exclusive network of the top highly skilled engineers  available in India
Top companies rely on iSkyll for their projects.

<p className="hirechild">Java Script Developers,

HTML/CSS Developers,

Java Developers,

React Developers
,
Angular Developers,

BigData Developers,

Data Scientists,

Business Analysts, Scrum Process Experts</p></p>
   
   </div>
  
   </div>
  </div>
  </div>
  </div>
        </section>
   </div>

  )
}
 }




