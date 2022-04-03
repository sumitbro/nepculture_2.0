import React, { useState, useEffect } from 'react';
import '../Exhibition.css';
// import ExhibitItem from './ExhibitItem';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_items } from '../../../actions/item_actions';


const ProductCategory = (props) =>{

    const category= [
        {
            'id':1,
            'image':'',
            'category': 'Arts'


        },
        {
            'id':2,
            'image':'',
            'category':'Handicrafts',
        },

        {
            'id':3,
            'image':'',
            'category':'Paint',
        }
    ]


    // const {items}= useSelector((state)=>state.itemReducer)
    // const dispatch= useDispatch()

    // useEffect(()=>{
    //     dispatch(get_items('/product/product/'))
    // },[dispatch])



        return (
            <div className='container'>
                <br /><br />
                <p style={{ fontSize: "40px", textAlign: "center", fontWeight: "bold" }}> FEATURED EXHIBITION </p><br /><br />

                <h1>Product_by Category</h1>
                {
                    category.map((e,i)=>{
                        return(
                            <div>{e.category}
                            Link={e.id}
                            </div>

                            
                        )
                    })
                }
                

                
            </div>
        );
    }


export default ProductCategory;