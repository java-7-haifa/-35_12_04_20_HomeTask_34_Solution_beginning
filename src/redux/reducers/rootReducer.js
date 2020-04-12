import contactReducer from './contactReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    contacts:contactReducer
});
