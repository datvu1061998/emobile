import * as Types from '../constants/Types';
const initialState = null;

const CartProduct = (state = initialState, action) => {
    const product = action.product;
    switch (action.type) {
        case Types.GET_PRODUCT_CART:
            state = action.products
            return [...state]
        case Types.DELETE_PRODUCT_CART:
            const index = state.findIndex(x => x.id === product.id);
            state.splice(index,1);
            if(state === null) return [];
            return [...state]
        case Types.UPDATE_PRODUCT_CART:
            if (state[state.findIndex(x => x.id === product.id)]) return state;
            state.push(product);
            return [...state]
        case Types.LOGOUT:
            return null;
        default:
            return state;
    }
}

export default CartProduct;