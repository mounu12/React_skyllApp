import {FETCH_PERSONS,FETCH_PERSONSBYID} from '../actions/products'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_PERSONS:
        //console.log(action.payload)
        return action.payload

        case FETCH_PERSONSBYID:

        return action.payload
        default:

      return state;

     }
  
  
}