import { combineReducers } from 'redux';
import auth from './auth';
import userReducer from './Userreducer';
import  cartReducer  from './cart_reducer';
import  itemReducer  from './item_reducer';

export default combineReducers({
    auth, userReducer, cartReducer, itemReducer
});