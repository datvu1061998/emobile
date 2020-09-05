import { combineReducers } from "redux";
import products from './productReducer';
import brands from './BrandReducer';
import user from './UserReducer';
import cart from './CartReducer';
import cartProducts from './ProductCartReducer';
import * as Types from './../constants/Types';

const isLoad = (state = false,action)=>{
    switch(action.type){
        case Types.UPDATE_LOAD: 
        return action.isLoad;
        default: return state;
    }
}

const appReducer = combineReducers({products,brands,user,cart,cartProducts,isLoad});

export default appReducer;