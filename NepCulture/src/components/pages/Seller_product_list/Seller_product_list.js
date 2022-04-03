import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { get_item_by_id, delete_item } from '../../../actions/item_actions'

import ProductForm from '../ProductForm/ProductForm'
const Seller_product_list = () => {


    const location= useLocation()
    const {storeId}= location.state
    const dispatch= useDispatch()

    const {items, loading}= useSelector((state)=>state.itemReducer)
    const [showForm,setshowForm]= useState(false);
    const [actionForm,setActionForm]= useState(false);
    const [editForm,setEditForm]= useState({});

    useEffect(() => {
        dispatch('/product/product/seller/', storeId)
        
      }, [dispatch, storeId])

      const showFormPanel= (action,dataProduct)=>{
          setActionForm(action)
          setshowForm(false);
          setTimeout(()=>{
              setshowForm(true)
          },500);

          setEditForm(dataProduct);


      }
      const deleteProduct= (id)=>{
          if(window.confirm('Delete the item?')){
              dispatch(delete_item(id))
              window.location.replace('/seller_product_list')
          }
      }

      const cancel=()=>{
          setshowForm(false);

      }


    
  return (
    <div>
        <h1>Seller_product_list</h1>
        <div>
        {showForm?<span></span>:<button onClick={()=>showFormPanel('Add', {})}Add Product></button>}
        </div>
        {showForm? <ProductForm cancel= {()=>{cancel()}}
        storeId={storeId}
        actiontype={actionForm}
        editForm= {editForm}
        />:
        <span></span>}
        {showForm?<span></span>:
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Thumbnail</th>
                    <th>Condition</th>


                </tr>
            </thead>
            <tbody>
                {loading?
                <tr>
                    <td>Loading...</td>

                </tr>:
                items.map((e,i)=>{
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{`${e.title.length<=25?e.title:e.title.substring(0,25)+'...'}`}</td>
                        <td>{`${e.description.length<=25?e.description:e.description.substring(0,25)+'...'}`}</td>
                        <td>{e.category}</td>

                        <td>{e.price}</td>
                        <td>{e.thumbnail}see</td>
                        <td>{e.condition}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>

                })
                }
            </tbody>
        </table>
        }
    
    </div>
  )
}

export default Seller_product_list