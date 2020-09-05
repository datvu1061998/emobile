import * as Types from '../constants/Types';

const initialState = [];

const Product = (state = initialState, action)=>{
    switch(action.type){
        case Types.GET_PRODUCT:          
            state = action.products;
            
            return [...state];
        default : return [...state];
    }
}
export default Product;