import { combineReducers } from 'redux';
import auth from './auth';
import userReducer from './Userreducer';

export default combineReducers({
    auth, userReducer
});