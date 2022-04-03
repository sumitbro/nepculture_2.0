import {
    GET_CART,
    ADD_TO_CART,
    DELETE_FROM_CART,
    CART_LOADING,
    GET_ITEM_CART,
    ADD_ITEM_TO_CART,
    DELETE_ITEM_FROM_CART,
    CART_ITEM_LOADING,
    FILTER_PRICE,
} from "../actions/carttypes";

const initialState = {
    cart: [],
    cartitem: [],
    loadingcart: false,
    loadingcartitem: false,
    products:[],
    loadingproduct:true

}

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_CART:
            return {
                ...state,
                cart: payload,
                loadingcart: false,
            };

        case ADD_TO_CART:
            return {
                ...state,
                cart: payload,
                loadingcart: false,
            };

        case DELETE_FROM_CART:
            return {
                ...state,
                cart: payload,
                loadingcart: false,
            };
        case CART_LOADING:
            return {
                ...state,

                loadingcart: true,
            };
        case GET_ITEM_CART:
            return {
                ...state,
                cartitem: payload,
                loadingcartitem: false,
            };
        case ADD_ITEM_TO_CART:
            return {
                ...state,

                loadingcartitem: false,
            };

        case DELETE_ITEM_FROM_CART:
            return {
                ...state,

                loadingcartitem: false,
            };
        case CART_ITEM_LOADING:
            return {
                ...state,

                loadingcartitem: true,
            };
        case FILTER_PRICE:
            return {
                ...state,
                loadingproduct:false,
                products: payload,
            };

        default:
            return state;
    }
}

export default cartReducer
