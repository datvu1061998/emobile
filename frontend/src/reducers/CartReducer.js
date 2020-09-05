import * as Types from '../constants/Types';

var initalState = null;

const Cart = (state = initalState,action)=>{
    const id = action.id;
    const color = action.color;
    const increase = action.increase;
    switch(action.type){
        case Types.GET_CART:
            state = {...action.cart}
            return state;
        case Types.LOGOUT:
            return null;
        case Types.ADD_CART:
            if(state[id]){
                state[id][color] = increase;
            }else{
                state[id] = {[color]: increase};
            }
            return {...state};
        case Types.DELETE_CART:
            if(color){
                if(Object.keys(state[id]).length === 1){
                    delete state[id];
                }else{
                    delete state[id][color];
                }

            }else{
                delete state[id];
            }
            return {...state};
        case Types.UPDATE_CART:
            state[id][color] += action.increase;
                if(state[id][color] <= 0)
                    delete state[id][color];
                if(Object.keys(state[id]).length <= 0)
                    delete state[id];
            return {...state};
        default: return state;
    }
}
export default Cart;