import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { createstore } from '../../../actions/user_actions';


let tokenparse=[];
const Createstoreform = () => {

    const {access}= useSelector((state)=>state.auth)

    const [name, setName]= useState("");
    const dispatch= useDispatch();


    const onSubmit =e=>{
        e.preventDefault();
        dispatch(createstore({
            'userId': tokenparse?.id,
            'name': name
        }))

    }

    useEffect(()=>{
        if (access !== null && access !== "undefined") {
            tokenparse = (access);
            // console.log(tokenparse)
            
            
            // dispatch(load_user(tokenparse?.id));
            // dispatch(getstore(tokenparse?.id))
          }
    },[dispatch])
  return (
    <div>
        <h1> Create store form</h1>
        <form onSubmit={e=>{onSubmit(e)}}>
            <input type='text' name='name' placeholder='Store Name' value={name} onChange={e=>setName(e.target.value)}/>
            <button type='Submit'> Create Store</button>

        </form>
    </div>
  )
}

export default Createstoreform