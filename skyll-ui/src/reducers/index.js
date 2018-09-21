import {combineReducers} from 'redux';

import ProductsReducer from './products'


const allReducers=combineReducers({

   products:ProductsReducer
});

export default allReducers; 