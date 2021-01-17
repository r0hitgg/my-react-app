import { combineReducers } from 'redux';
import  productReducer  from './productsReducer';
import userReducer from './UserReducers'


const rootReducer = combineReducers({
    products: productReducer,
    userData: userReducer,
});
export default rootReducer;