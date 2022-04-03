import React from 'react'
import { Link } from 'react-router-dom'

const StoreInfoPanel = (store, isloading) => {


  return (
    <div>
        
        <h1>storeInfoPanel</h1>
        <h5>{isloading?'Loading...':store[0]?.name}</h5>
        <Link to ={'/seller_product_list'} state={{storeId:store[0]?.id}}>
            <button>Add Product</button>
        </Link>
    
    
    
    </div>
  )
}

export default StoreInfoPanel