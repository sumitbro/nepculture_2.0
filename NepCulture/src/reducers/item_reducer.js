import {
    GET_ITEMS,
    SEARCH_ITEMS,
    GET_ITEM_BY_CATEGORY,
    GET_ITEM_BY_ID,
    ADD_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING,
    EMPTY_ITEMS
} from "../actions/itemtypes";

const initialState = {
    items: [],
    loading: true

}

const itemReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ITEMS:
            return {
                ...state,
                items: payload,
                loading: false,
            };

        case SEARCH_ITEMS:
            return {
                ...state,
                items: payload,
                loading: false,
            };

        case GET_ITEM_BY_CATEGORY:
            return {
                ...state,
                items: payload,
                loading: false,
            };
        case GET_ITEM_BY_ID:
            return {
                ...state,
                items: payload,
                loading: false,
            };
        case ADD_ITEM:
            return {
                ...state,
                
                loading: false,
            };
        case UPDATE_ITEM:
            return {
                ...state,
                
                loading: false,
            };

        case DELETE_ITEM:
            return {
                ...state,
                
                loading: false,
            };
        case ITEMS_LOADING:
            return {
                ...state,
                
                loading: true,
            };

            case EMPTY_ITEMS:
                return {
                    ...state,
                    items:[],
                    
                    loading: false
                };

        default:
            return state;
    }
}


export default itemReducer