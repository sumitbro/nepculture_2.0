import axios from "axios";
import {

    
    CREATE_STORE,
    GET_STORE,
    USER_LOADING
  
  
  } from "./types";




export const getstore = (userId) => async (dispatch) => {


    dispatch({
        type:USER_LOADING
    })

    

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({ userId });


    const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/store/${userId}/`,
        body,
        config
    );

    dispatch({
        type: GET_STORE,
        payload: res.data

    });

};


export  const createstore = (dataForm) => async (dispatch) => {

    

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    


    const body = JSON.stringify({dataForm });


    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/product/store/`,dataForm,
        body,
        config
    );

    dispatch({
        type: CREATE_STORE,
        payload: res.data

    });

};


export default getstore
// export {
//     getstore, createstore
// }