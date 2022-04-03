import React, { useState, useEffect } from 'react';
import '../Exhibition.css';
// import ExhibitItem from './ExhibitItem';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_items } from '../../../actions/item_actions';


const ProductBanner = (props) =>{


    const {items}= useSelector((state)=>state.itemReducer)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(get_items('/product/product/'))
    },[dispatch])



        return (
            <div className='container'>
                <br /><br />
                <p style={{ fontSize: "40px", textAlign: "center", fontWeight: "bold" }}> FEATURED EXHIBITION </p><br /><br />

                <h1>Product_by user</h1>
                {
                    items.map((e,i)=>{
                        return(
                            <div>{e.title}</div>
                             

                            
                        )
                    })
                }
                

                
            </div>
        );
    }


export default ProductBanner;