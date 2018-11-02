import { combineReducers } from 'redux';
import players from './playerReducer';
import auth from './authReducer';

export default combineReducers({ auth, players });
