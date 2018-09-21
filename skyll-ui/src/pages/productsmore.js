import React from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap'
import axios from 'axios';
import {fetchProducts,fetchProductsById} from '../actions/products';


require('../css/productsmore.css');


class ProductMore extends React.Component{
    state={
        moreabout:{},
    }
   
    constructor(props){
        super(props);
    }
    componentWillMount(){
    axios.get('http://localhost:8000/api/persons/'+localStorage.getItem('id')).then(response=> {
  console.log(response.data);
  this.setState({moreabout:response.data},

            );
      })
    }
   
  
  createoptions(){
    return this.state.moreabout.tags.map((imagecaro)=>{
      console.log(imagecaro);
    return(
      <p>imagecaro.name</p>
     ) 
    })
 
}
    render(){
         
            const title = (
  <h3>{this.state.moreabout.currentwork}</h3>
);
    var imagestyle={
        height:'270px',
        width:'269px',
        'border-radius':'6px'
        
    }
        return(
       
           <div>
               <div className="container-fluid moreabout">
                   <div className="col-lg-8 col-lg-offset-2">
          <Panel header={title} bsStyle="primary">
               <div className="row resume-section-carreer">
                      <div className="col-md-3 text-center image">
                       <img src={this.state.moreabout.image} alt="" className="image"></img> 
                      </div>
                      <div className="col-sm-6 col-md-8">
                        <div>
                          <h4 className="personname">{this.state.moreabout.name}</h4>
                        </div>
                          <div className="personqualification"><b>{this.state.moreabout.degree1},{this.state.moreabout.degree2}</b></div>
                          <div className="personcountry">{this.state.moreabout.country}</div>
                          <div className="personoverview">{this.state.moreabout.overview}</div>
                          <div className="tags-for-person">
                              <p className="each-tag-person">Abode Photoshope</p>
                          <p className="each-tag-person">User Interface</p>
                          <p className="each-tag-person">User Experience</p>
                          <p className="each-tag-person">Java </p>
                          <p className="each-tag-person">Python</p>
                            
                        </div>
                      </div>
                  </div>
                  <div className="row resume-section-carreer resume_hire_block ">
                      <div className="col-lg-6 col-lg-offset-3">
                          <div className="resume_hire_block_text">
                              {this.state.moreabout.name} is now  <span className="resume_hire_block-availability">available</span> for hire
                              
                              </div>
                          </div>
                      </div>
                  
                  <div className="row resume-section-carreer">
                      <div className="grid-row">
                          <div className="grid-row-inner">
                              <div className=".resume_details-title">
                                 <div className="row">
                                     
                                     <div className="col-lg-6 resume_details-item_inner ">
                                         <div className="resume_details-title">
                                             Career Highlights
                                             </div>
                                            <div className="resume-details-list">
                                                <ul className="resume_details-list ">
                                                    <li className="resume_details-list_item"><b>{this.state.moreabout.technicalskills}</b></li>
                                                    <li  className="resume_details-list_item"><b>{this.state.moreabout.currentwork}</b></li>
                                                    <li  className="resume_details-list_item"><b>{this.state.moreabout.previouswork}</b></li>
                                                </ul>
                                            </div>


                                    </div>
                                    <div className="resume-section-academic">
                                    <div className="col-lg-6 resume_details-item_inner resume-section-academic">
                                         <div className="resume_details-title">
                                             Academic Highlights
                                             </div>
                                            <div className="resume-details-list">
                                                <ul className="resume_details-list ">
                                                     <li className="resume_details-list_item"><b>{this.state.moreabout.degree1description}</b></li>
                                                    <li  className="resume_details-list_item"><b>{this.state.moreabout.degree2description}</b></li>
                                                     <li  className="resume_details-list_item"><b>{this.state.moreabout.currentwork}</b></li>  
                                                 
                                                 
                                                </ul>
                                            </div>


                                    </div>
                                    </div>
                                    
                                    </div>
                                  </div>
                            </div>
                        </div>
                      
                </div>
                  <div className="employment">
                             <div className="resume_details-title">
                                           Employment
                                       
                                             </div>
                                                 <div className="col-lg-12 text-right resume_details-title">2014 to present</div>
                            <div className="col-lg-12 employment-story">{this.state.moreabout.employment}
                                </div>
                              
                                                 <div className="col-lg-6 text-left resume_details-employment">Junior Software Engineer</div>
                                                 <div className="col-lg-6 text-right resume_details-title">2011 to 2014</div>
                                             <div className="col-lg-12 employment-story">{this.state.moreabout.employment2}</div> 
                                
                        </div>
                
                
    </Panel>
    </div>
    </div>
            </div>
             
        )
    }

}
// function mapStateToProps(state){
//   return{
//      products:state.products
//     }
// }
// export default connect(mapStateToProps,{fetchProducts,fetchProductsById})(ProductMore);
export default ProductMore