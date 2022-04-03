import {

  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  CREATE_STORE,
  GET_STORE,
  USER_LOADING


} from "../actions/types";

const initialState = {

  user: [],
  store:[],
  isloading: true

};

const userReducer = (state = initialState, action) => {
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
    case CREATE_STORE:
      return {
        ...state,
        store: payload,
        isloading:false
      };
    case GET_STORE:
      return {
        ...state,
        store: payload,
        isloading: false,
      };

    case USER_LOADING:
      return {
        ...state,
        
        isloading: true,
      };


    default:
      return state;
  }
}


export default userReducer