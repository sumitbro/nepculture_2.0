import {
    
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    
  } from "../actions/types";
  
  const initialState = {
    
    user: [],
  };
  
  const userReducer=(state = initialState, action)=> {
    const { type, payload } = action;
  
    switch (type) {
      
      case USER_LOADED_SUCCESS:
        return {
          ...state,
          user: payload,
        };
  
      case USER_LOADED_FAIL:
        return {
          ...state,
          user: null,
        };
  
     
      default:
        return state;
    }
  }
  
  
  export default userReducer