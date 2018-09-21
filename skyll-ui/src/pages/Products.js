import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {fetchProducts,fetchProductsById} from '../actions/products';

import { Link} from 'react-router-dom';

var Twitter = require('react-icons/lib/fa/twitter-square');
var Linkedin=require('react-icons/lib/fa/linkedin-square');

require('../css/products.css');
class Products extends React.Component {
  state={products:[]}
constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

 
  componentWillMount() {
  
   axios.get('http://localhost:8000/api/persons').then(response=> {
        console.log(response.data);
      this.setState({products:response.data});
      })
      
  }

   handleClick = (e,user) => {
    // e.preventDefault();
    console.log('The link was clicked.');
    console.log(user);
    localStorage.setItem('id',user._id);
   };

createoptions(){
  
    var imagestyle={
        height:'208px',
        width:'158px',
        'border-radius':'6px'
    }
    return this.state.products.map((user)=>{
    
    return(
       
   
          <div className="col-md-12 ">
              <div className="mainbox">
                  <div className="row productone">
                       <div className="col-md-3 text-center">
                      <img src={user.image} style={imagestyle} alt=""></img>
                      </div> 
                      
                      <div className="col-sm-6 col-md-9">
                        <div className="personname">
                          <h4 className="personname">{user.name}</h4>
                        </div>
                          <div className="personqualification"><b>{user.degree1},{user.degree2}</b></div>
                          <div className="personcountry">{user.country}</div>
                          <div className="personoverview">{user.overview}</div>
                      </div>
                  </div>
                  <hr/>
                  <div className="row productone">
                    <div className="col-lg-3">
                    
                    </div>
                    <div className="col-lg-9 text-right ">
                      
                      
                          <a className="twitterlink" href={user.twitterurl}><Twitter size={30} color={'#00a1ee'}/></a>
                         
                      
                      
                        <a className="linkedinlink" href={user.linkedinurl}><Linkedin size={30} color={'#0077b2'}/></a>
                      
                     
                        <a href="/moreabout" onClick={(e) => this.handleClick(e,user)}><b>More....</b></a>
                   
                       
                   

                    </div>
                 </div> 
           
              </div>
          </div>
        

  
    )
    })
    }

  render() {
  
    var user={
      name:"teja"
    }
  
    return (
      <div className="App">
         <h2></h2>
         <div className="container-fluid">
           <div className="col-lg-8 col-md-offset-2 ">
             {this.createoptions()}
             </div>
              {/* <div className="col-lg-6">
             {this.createoptions()}
             </div> */}
           </div>
        
      {/* user={user} */}
      
      </div>
    );
  }
}
export default Products


