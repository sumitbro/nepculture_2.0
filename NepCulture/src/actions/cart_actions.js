import axios from "axios";
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

} from "./carttypes";



export  const get_cart = (id) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ id });


    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/cart/${id}/`,
        body,
        config
    );

    dispatch({
        type: GET_CART,
        payload: res.data,
    });

};



export const add_to_cart = (id, quantity) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ id, quantity });


    const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/product/cart/${id}/`, { "userId": id, "quantity": quantity + 1 },
        body,
        config
    );

    dispatch({
        type: ADD_TO_CART,
        payload: res.data,
    });

};

export const delete_from_cart = (id, quantity) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ id, quantity });


    const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/product/cart/${id}/`, { "userId": id, "quantity": quantity - 1 },
        body,
        config
    );

    dispatch({
        type: DELETE_FROM_CART,
        payload: res.data,
    });

};



export const get_items_cart = (cartId) => async (dispatch) => {
    dispatch({ type: CART_ITEM_LOADING });
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ cartId });


    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/showitemcart/${cartId}/`, 
        body,
        config
    );

    dispatch({
        type: GET_ITEM_CART,
        payload: res.data,
    });

};



export const add_item_to_cart = (cartId, productId) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // const body = JSON.stringify({ cartId, productId });


    await axios.get(
        `${process.env.REACT_APP_API_URL}/product/cart_item_same_product/${cartId}/${productId}/`, config).then(async(res) => {
            if (res.data.length === 0) {
                await axios.post(
                    `${process.env.REACT_APP_API_URL}/product/cartitemlist/`, { "cartId": cartId, "productId": productId, "quantity": 1 }, config).then((res2) => {
                        dispatch({
                            type: ADD_ITEM_TO_CART,
                            payload: res.data,
                        });

                    })
            }
            else {
                await axios.post(
                    `${process.env.REACT_APP_API_URL}/product/cartitemlist/id/${res.data[0]?.id}`, { "cartId": cartId, "productId": productId, "quantity": res.data[0]?.quantity + 1 }, config)


            }


        })

};




export const delete_item_from_cart = (id) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ id });


    const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/product/cartitemlist/${id}/${id}/`,
        body,
        config
    );

    dispatch({
        type: DELETE_ITEM_FROM_CART,

    });

};



export const filter_price = (minprice, maxprice) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    let url;
    if ((minprice && maxprice === '')) {
        url = `product/filter/price/min/${minprice}/`

    } else {
        url = `product/filter/price/max/${maxprice}/`
    }


    const body = JSON.stringify({ minprice, maxprice });


    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}${url}`, 
        body,
        config
    );

    dispatch({
        type: FILTER_PRICE,
        payload: res.data

    });

};

export default get_cart