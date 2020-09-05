import * as Types from '../constants/Types';

const initialState =[];

const Brand = (state = initialState,action)=>{
    switch(action.type){
        case Types.GET_BRAND:
            state = action.brands;
            return [...state];
        default: return [...state];
    }
}

export default Brand;