import React, { Component } from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Headers from './Headers';
import Footer from './Footer';

//  import Footers from './footers/footer';
 import About from './pages/About';
 import Contact from './pages/Contact';
 import Home from './pages/Home';
 import Program from './pages/program';
 import Products from './pages/Products';
 import Reskill from './pages/Reskill';
 import moreabout from './pages/productsmore';
 import './index.css';
import allReducers from './reducers';
import GetTeam from './pages/getteam';
import BuildTeam from './pages/BuildTeam';
import HireTeam from './pages/HireTeam';

import Testimonial from './pages/testimonials';
import Howto from './pages/howto';
import Aplly from './pages/apply';
import faq from './pages/faq';


const store=createStore(allReducers, applyMiddleware(thunk));
 export default class App extends Component{
   

    render(){
  return(
   
    <div>
      
         
      <Provider store={store}>
      <BrowserRouter>
        <div>
        <Headers />
       
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/program" component={Program} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/products" component={Products}/>
                    <Route exact path="/reskill" component={Reskill}/> 
                    <Route exact path="/moreabout" component={moreabout} /> 
                    <Route exact path="/getteam" component={GetTeam}/>
                  <Route exact path="/buildteam" component={BuildTeam}/>
                  <Route exact path="/hireteam" component={HireTeam}/>

                  <Route exact path="/testimonials" component={Testimonial}/>
                

                  <Route exact path="/howto" component={Howto}/>
                  <Route exact path="/apply" component={Aplly}/>
                  <Route exact path="/faq's" component={faq} />


                
               
                </Switch>
               
                
                </div>
                
                
          </BrowserRouter>
          </Provider >
               <Footer />
                {/* <Footers/> */}
        
    </div>
    
  )
}
}
