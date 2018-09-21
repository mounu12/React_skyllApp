import React from 'react';
import { NavLink } from 'react-router-dom'
require('./css/header.css');
export default () => {
  return(
    // <div>
    //   <div className="navbar navbar-default ">
    //     <div className="container">
    //       <div className="navbar-header pull-right">
    //         <ul className="nav navbar-nav">
    //           <li><Link to="/">Home<span className="sr-only">(current)</span></Link></li>
    //           <li><Link to="/program">Program</Link></li>
    //           {/* <li><Link to="/about">About</Link></li> */}
    //           <li><Link to="/contact">Contact</Link></li>
    //         <li><Link to="/products">Products</Link></li>
    //         <li><Link to="/reskill">Reskill</Link></li>
              
    //          <li><button className="btn btn-info">HIRE TOP TALENT</button></li>
    //         </ul>
    //       </div>
    //     </div>
    //     </div>    
    // </div>
    <nav className="navbar navbar-fixed-top" id="mainNav">
       
        <div className="container" >
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
              <div className="mainnav">
                    {/* <a className="navbar-brand" href="/" >IskYll</a> */}
                    <a  href="/" > <img src="/images/logo.png"></img></a>
                </div>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav navbar-right">
            <li><NavLink  activeClassName='active' to="/" activeStyle={{ color:'#43c692' }}>Home</NavLink ></li>
            <li><NavLink  activeClassName='active' to="/program" activeStyle={{ color:'#43c692' }}>Program</NavLink ></li>
           <li><NavLink   activeClassName='active' to="/products" activeStyle={{ color:'#43c692' }}>Talent</NavLink ></li>
           
             <li><NavLink  activeClassName='active' to="/testimonials" activeStyle={{ color:'#43c692' }}>Testimonials</NavLink ></li>
           
          
             {/* <Link className=" btn" to="/reskill"><span className="txtclr"><b>RESKILL</b></span></Link> */}

        
           <li><button className="btn"><NavLink  to="/reskill" activeStyle={{ color:'#43c692' }}><span className="txtclr">RESKILL</span></NavLink ></button></li> 
          
            <li><NavLink  to="/contact" activeStyle={{ color:'#43c692' }}>ABOUT US</NavLink ></li>
            </ul>

        </div>
        </div>
   
</nav>
    
  )
}