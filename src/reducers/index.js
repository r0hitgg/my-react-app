import { combineReducers } from 'redux';
import  productReducer  from './productsReducer';
import userReducer from './UserReducers'


export default combineReducers({
    products: productReducer,
    userData: userReducer,
});