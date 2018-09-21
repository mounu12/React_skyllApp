import React from 'react';

require('../css/howto.css');
var Arrow = require('react-icons/lib/fa/long-arrow-right');

class Howto extends React.Component{
    render(){
        return(
            <div className="howtogetin circlemargin App">
       

	
            <div className="container">
	<div className="row">
		<section className="section_0">
      <div className="col-sm-2">
      <div className="row">
        <div className="circle circle1">
        <p ><h3 className="testdetails">Aptitude<p>Tests</p></h3></p>
        </div>
        {/* <span  className="arrows">&#8594;</span> */}
        </div>
      </div>
   
     <div className="col-sm-2">
     <div className="row">
       <div className="circle circle1">
       <p ><h3 className="testdetails">Technical<p>Tests</p></h3></p>
       </div>
       <span  className="arrows">&#8594;</span>
       </div>
     </div>
  
     <div className="col-sm-2">
     <div className="row">
       <div className="circle circle1">
       <p ><h3 className="testdetails">Group<p>Discussion</p></h3></p>
       </div>
       <span  className="arrows">&#8594;</span>
       </div>
     </div>
     <div className="col-sm-2">
     <div className="row">
       <div className="circle circle1">
       <p ><h3 className="testdetails">Technical<p>Interview</p></h3></p>
       </div>
       <span  className="arrows">&#8594;</span>
       </div>
     </div>
     <div className="col-sm-2">
     <div className="row">
       <div className="circle circle1">
       <p ><h3 className="testdetails">Success<p>You are IN</p></h3></p>
       </div>
       <span  className="arrows">&#8594;</span>
       </div>
     </div>
      {/* <div className="col-sm-2">
        <div className="circle">
        <p ><h3 className="testdetails">INTERVIEW<p></p></h3></p>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="circle">
        <p ><h3 className="testdetails">GET IN<p></p></h3></p>
        </div>
      </div> */}
    </section>
	</div>
</div>
</div>

        )
    }
}
export default Howto;