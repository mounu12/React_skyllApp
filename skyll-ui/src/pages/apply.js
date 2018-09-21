import React from 'react';
require('../css/apply.css');

import axios from 'axios';

class Aplly extends React.Component{
      constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            contactnumber:'',
            gender:'',
            address:'',
            degree:'',
            degreepercentage:'',
            degreepassingyear:'',
            intermediate:'',
            interpercentage:'',
            interpassingyear:'',
            ssc:'',
            sscpercentage:'',
            sscpassingyear:'',
            fathername:'',
            mothername:'',
            parentsoccupation:''
        }
    }
    apply(event){
        event.preventDefault();
        var self= this;
        var applydetails={
            "name":this.state.name,
            "email":this.state.email,
            "contactnumber":this.state.contactnumber,
            "gender":this.state.gender,
            "address":this.state.address,
            "degree":this.state.degree,
            "degreepercentage":this.state.degreepercentage,
            "degreepassingyear":this.state.degreepassingyear,
            "intermediate":this.state.intermediate,
            "interpercentage":this.state.interpercentage,
            "interpassingyear":this.state.interpassingyear,
            "ssc":this.state.ssc,
            "sscpercentage":this.state.sscpercentage,
            "sscpassingyear":this.state.sscpassingyear,
            "fathername":this.state.fathername,
            "mothername":this.state.mothername,
            "parentsoccupation":this.state.parentsoccupation,

        }
        console.log(applydetails);
        axios.post('http://localhost:8000/api/application',applydetails).then(response =>{
            console.log(response.data);
        })
    }
    render(){
        return(
            <div className="App">
            <div className="container">
            <div className="row">
   <div className="col-md-12">
      <div className="panel  addteacherpanel">
         <div className="panel-body teacherpanel">
            <form id="form" className="form-horizontal" role="form" name="studentregistrationform" >
               <h4><u><b>Person Details</b></u></h4>
               <div className="row">
                  <div className="col-md-6">
                     <div className="left-side-form">
                   
                        <div className="row">
                           <div className="col-md-4">
                              <label> Name</label>
                           </div>
                           <div className="col-md-8 ">
                              <input type="text" className="form-control form-input" id="" name="name" placeholder="name*" onChange={(event) => this.setState({name:event.target.value}) }  required />
                           </div>
                        </div>
                        <br/>
                        
                        <div className="row">
                           <div className="col-md-4">
                              <label>E-mail</label>
                           </div>
                           <div className="col-md-8 ">
                              <input type="email" className="form-control form-input" id="" name="e-mail" placeholder="xxxxxxxxx@yyyy.com*" onChange={(event) => this.setState({email:event.target.value}) } required />
                           </div>
                        </div>
                        <br />
                           <div className="row">
                              <div className="col-md-4">
                                 <label>Contact Number</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="contactnumber" 
                                    placeholder="Contact Number*"  onChange={(event) => this.setState({contactnumber:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br /> 
              
                
                        
                     </div>
                  </div>
                       <div className="col-md-6">
                     <div className="left-side-form">
                        <div className="row">
                            <div className="row">
                           <div className="col-md-4">
                              <label>Gender</label>
                           </div>
                           <div className="col-md-8">
                              <label><input type="radio" name="gender" value="female" onChange={(event) => this.setState({gender:event.target.value}) } />       Female</label>
                              <label><input type="radio" name="gender" value="male" onChange={(event) => this.setState({gender:event.target.value}) } />Male</label>
                           </div>
                        </div>
                        <br />
                    <div className="row">
                           <div className="col-md-4">
                              <label>Address</label>
                           </div>
                           <div className="col-md-8">
                              <textarea rows="4" cols="40" name="about" className="form-control form-input" onChange={(event) => this.setState({address:event.target.value}) } required></textarea>
                           </div>
                        </div>
                    
                       
                          
                        </div>
                     </div>
                  </div>
                  <br />
                
               </div>
                <hr />
               <h4><u><b>Educational Details :</b></u></h4>
               <div className="row">
                   <div className="col-lg-1">
                       <label>Degree:</label>
                    </div>
                    <div className="col-lg-4">
                <input type="text" className="form-control form-input" id="" name="degree"  placeholder="College Name*" onChange={(event) => this.setState({degree:event.target.value}) }  required />
                        
                    </div>
                     <div className="col-lg-1">
                        <label>Percentage<span>&#37;</span>:</label>
                    </div>
                    <div className="col-lg-2">
                <input type="text" className="form-control form-input" id="" name="percntagedegree"  placeholder="Percentage*" onChange={(event) => this.setState({degreepercentage:event.target.value}) } required />
                        
                    </div>
                     <div className="col-lg-1">
                       <label>Year Of Passing:</label>
                    </div>
                    <div className="col-lg-3">
                <input type="text" className="form-control form-input" id="" name="yopdegree"  placeholder="year of passing*"onChange={(event) => this.setState({degreepassingyear:event.target.value}) } required />
                        
                    </div>

                </div>
                <br />
                      <div className="row">
                   <div className="col-lg-1">
                       <label>Inter Mediate:</label>
                    </div>
                    <div className="col-lg-4">
                <input type="text" className="form-control form-input" id="" name="inter"  placeholder="College Name*" onChange={(event) => this.setState({intermediate:event.target.value}) } required />
                        
                    </div>
                     <div className="col-lg-1">
                       <label>Percentage<span>&#37;</span>:</label>
                    </div>
                    <div className="col-lg-2">
                <input type="text" className="form-control form-input" id="" name="percentageinter"  placeholder="Percentage*" onChange={(event) => this.setState({interpercentage:event.target.value}) } required />
                        
                    </div>
                     <div className="col-lg-1">
                       <label>Year Of Passing:</label>
                    </div>
                    <div className="col-lg-3">
                <input type="text" className="form-control form-input" id="" name="yopinter"  placeholder="Year Of Passing*"onChange={(event) => this.setState({interpassingyear:event.target.value}) } required />
                        
                    </div>

                </div>
                <br/>
                      <div className="row">
                   <div className="col-lg-1">
                       <label>S.S.C:</label>
                    </div>
                    <div className="col-lg-4">
                <input type="text" className="form-control form-input" id="" name="ssc"  placeholder="School Name*" onChange={(event) => this.setState({ssc:event.target.value}) }  required />
                        
                    </div>
                     <div className="col-lg-1">
                       <label>Percentage<span>&#37;</span>:</label>
                    </div>
                    <div className="col-lg-2">
                <input type="text" className="form-control form-input" id="" name="sscpercentage"  placeholder="percentage *" onChange={(event) => this.setState({sscpercentage:event.target.value}) }  required />
                        
                    </div>
                     <div className="col-lg-1">
                       <label>Year Of Passing:</label>
                    </div>
                    <div className="col-lg-3">
                <input type="text" className="form-control form-input" id="" name="yopssc"  placeholder="Year of passing*" onChange={(event) => this.setState({sscpassingyear:event.target.value}) }  required />
                        
                    </div>

                </div>
                <br />
               <hr />
               <h4><u><b>Parent Details :</b></u></h4>
               
               <div >
                  <div className="row">
                     <div className="col-md-6">
                        <div className="left-side-form">
                           <div className="row">
                              <div className="col-md-4">
                                 <label>Father Name</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="fathername"  placeholder="Father Name*" onChange={(event) => this.setState({fathername:event.target.value}) } required />
                              </div>
                           </div>
                           <br />
                            <div className="row">
                              <div className="col-md-4">
                                 <label>Parents Occupation</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="fathername"  placeholder="parents Occupation*" onChange={(event) => this.setState({parentsoccupation:event.target.value}) }  required />
                              </div>
                           </div>
                          
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="right-side-form">
                         <div className="row">
                              <div className="col-md-4">
                                 <label>Mother Name</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="mothername" placeholder="Mother Name*" onChange={(event) => this.setState({mothername:event.target.value}) }  required />
                              </div>
                           </div>
                           <br />
                         
                     </div>
                  </div>
               </div>
               
               <div className="row applystyle">
                  <div className="col-lg-6 col-lg-offset-3 text-center">
                      <div className="col-lg-2">
                     <button id="btn-reset" type="reset" className="btn button"> Reset</button></div>
                     <div className="col-lg-2">
                     <button id="btn-Register" type="submit" name="submit" onClick={(event)=>this.apply(event)} className="btn button"  >Submit</button></div>
                  </div>
               </div>
               </div>
               

            </form>
         </div>
      </div>
   </div>
</div>
</div>
</div>
        )
    }
}
export default Aplly