import axios from 'axios';


export const FETCH_PERSONS='FETCH_PERSONS';
export const FETCH_PERSONSBYID='FETCH_PERSONSBYID';





const fetchSuccess=(response)=>{
   console.log(response.data)
    return{
        type:FETCH_PERSONS,
        payload:response.data
    }

}

 export const fetchSuccessById=(response)=>{
    console.log(response.data);
      localStorage.setItem('id',response.data._id);
    return{
        type:FETCH_PERSONSBYID,
        payload:response.data
    }
}


export function fetchProducts(){
   
    return function(dispatch){
        return axios.get('http://localhost:8000/api/persons ').then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}


export function fetchProductsById(user){
    
   
    return function(dispatch){
        return axios.get('http://localhost:8000/api/persons/'+user._id).then(response=>{
            dispatch(fetchSuccessById(response));
        })
    }
}

   