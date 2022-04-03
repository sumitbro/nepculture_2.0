import axios from "axios";
import {
    GET_ITEMS,
    SEARCH_ITEMS,
    GET_ITEM_BY_CATEGORY,
    GET_ITEM_BY_ID,
    ADD_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING,
    EMPTY_ITEMS,

} from "./itemtypes";



// let url;
//     if ((minprice && maxprice === '')) {
//         url = `product/filter/price/min/${minprice}/`

//     } else {
//         url = `product/filter/price/max/${maxprice}/`
//     }

export const get_items = (url) => async (dispatch) => {

    dispatch({
        type: ITEMS_LOADING
    })

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({ url});


    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}${url}`,
        body,
        config
    );

    dispatch({
        type: GET_ITEMS,
        payload: res.data

    });

};




export const search_items = (keyword) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({ keyword });


    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/product/search?search=${keyword}`, 
        body,
        config
    );

    dispatch({
        type: SEARCH_ITEMS,
        payload: res.data

    });

};
export const get_item_by_id = (url,id) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({ url,id });


    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}${url}${id}`, 
        body,
        config
    );

    dispatch({
        type: GET_ITEM_BY_ID,
        payload: res.data

    });

};



export const get_item_by_category = (category) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({ category });


    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/product/find/${category}`,
        body,
        config
    );

    dispatch({
        type: GET_ITEM_BY_CATEGORY,
        payload: res.data

    });

};



export const add_item = (item) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({ item });


    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/product/product/`,item,
        body,
        config
    );

    dispatch({
        type: ADD_ITEM,
        payload: res.data

    });

};


export const delete_item = (id) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({ id });


    const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/product/product/${id}`,
        body,
        config
    );

    dispatch({
        type: DELETE_ITEM,
        payload: res.data

    });

};


export const update_item = (id) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({ id });


    const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/product/product/${id}`,
        body,
        config
    );

    dispatch({
        type: UPDATE_ITEM,
        payload: res.data

    });

};



export const emppty_item = () => async (dispatch) => {

    dispatch({
        type: EMPTY_ITEMS

    });

};


