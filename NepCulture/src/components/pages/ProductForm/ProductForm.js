import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_item, update_item } from '../../../actions/item_actions'



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

const ProductForm = ({storeId, actionType, editForm,cancel}) => {
    const {items, loading}= useSelector((state)=>state.itemReducer)

    const dispatch= useDispatch()
    const [formData, setFormData]= useState({
        title:"",
        description:"",
        category:"",
        price:"",
        thumbnail:"",
        condition:""

    })


    const [thumbnailimgfile, setthumbnailimgfile]= useState(null);
    const {title,description,category, price, thumbnail, condition}=formData
    const onChange=e=>{setFormData({
        ...formData,[e.target.name]:e.target.value
    });

    }
    const onSubmit=e=>{
        e.preventDefault();
        if(!loading){
            const data={
                'storeId':storeId,
                'title':title,
                'description':description,
                'category':category,
                'price':price,
                'thumbnail':thumbnail,
                'condition':condition

            }
            if(actionType==="Add"){
                dispatch(add_item(data, thumbnail))

            }else{
                dispatch(update_item(editForm.id,data))
            }
            setTimeout(()=>{
                window.location.replace('/seller_product_list')

            },1000)
        }
    }

    useEffect(()=>{
        if(Object.keys(editForm).length!==0){
            setFormData(editForm)

        }
    },[dispatch, editForm])





  return (
    <div>
        <h1>ProductForm</h1>
        <form onSubmit={e=>onSubmit(e)}>
            <div>
                <strong>
                    Name:
                </strong>
                <input type='text' name='title' placeholder='Product name' value={title} onChange={e=>{onChange(e)}}required/>
            </div>
            <div>
                <strong>
                    Description:
                </strong>
                <input type='text' name='description' placeholder='Description' value={description} onChange={e=>{onChange(e)}}required/>
            </div>
            <div>
                <strong>
                    Category:
                </strong>
                <select value={category} name="category" onChange={e=>{onChange(e)}}required>
                    <option value="" disabled>Category</option>
                    {category.map((e,i)=>{
                        return(
                            <option value={e.category}>{e.category}</option>
                        )
                    })}
                </select>
                
            </div>
            <div>
                <strong>
                    Price:
                </strong>
                <input type='number' name='price' placeholder='Price' value={price} onChange={e=>{onChange(e)}}required/>
            </div>
            <div>
                <strong>
                    Thumbnail:
                </strong>
                <input type='file' accept='image/png, image/jpg, image/jpeg' name='thumbnail' placeholder='Thumbnail' value={thumbnail} onChange={e=>{onChange(e)}}required/>
            </div>
            <div>
                <strong>
                    Condition:
                </strong>
                <select value={condition} name='condition' onChange={e=>{onChange(e)}}required>
                <option value="" disabled>Condition</option>
                <option value="New" >New</option>
                <option value="Renewed" >Renewed</option>
                <option value="Used" >Used</option>
                </select>
                
            </div>
        </form>
    
    </div>

  )
}

export default ProductForm