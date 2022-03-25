import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Itemdetail.css';


const Itemdetail=()=> {
  
  const {id}= useParams();
  const [products, setproduct] = useState({
    title:"",
    price:"",
    category:"",

    description:"",
    image:"",



})

useEffect(() => {
    loadproduct()
}, []);

const loadproduct = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/product/item/${id}`)
    setproduct(result.data)

}
  return (
    
    <div className="item_detail">
      <div className="maincontainer">
        <div className="productpreview">
          <img src={products.image} alt="">
          </img>
        </div>

        <div className="productdata">
          <h1>
          {products.title}
            
          </h1>
          <div className="productdetail">
            <p>
              M Code: 199PA2019
            </p>
            <p>
              Year: 2019
            </p>
            <p>
              {products.category}
            </p>
            <p>
              36 x 29 cm
            </p>
            <p>
              Rs. {products.price}
            </p>
          </div>

          <div className="productabout">
            <h3>About the art</h3>
          </div>

          <div className="productdescription">
            <p> 
              Akash Yogini is also called “Bijesvari” (wisdom goddess), and “Vidhyadhari
              Vajrayogini” (knowledge holder). She is seen in a flying position leaping
              towards the akash (sky). One of her legs is pointed towards the sky and her
              right leg is bent up at the knee without touching the ground. The Goddess’s
              left-hand goes under her left leg and carries a kapala (skull cup) and khatwanga
              (long studded club) which is sealed with a golden cross vajra, a nectar vase,
              impaled blue head of Bhairav,a human head, a dry white skull and a crowning half Vajra.
              {products.descreption}
            </p>
          </div>
        </div>
      </div>

      <div className='addtocart'>
        <Link to='itembuy'>
          <button className='cart_button'> Buy Now रु {products.price}</button>
        </Link>
        <Link to='main-cart-section'>
          <button className='cart_button'> Add to Cart </button>
        </Link>
      </div>

      {/* for artist */}
      <Link className='artist' to='/profile' style={{ textDecoration: 'none' }}>
        <div className="secondcontainer">
          <div>
            <img className="artistimg"
              src="https://www.mona.com.np/get-image/320/11080597_812161728874301_6862044761280076146_o_1619417088-resized320.jpg" alt="" />
          </div>
          <div>
            <h1 className="artistname">
              Jeevan Rajopadhyay
          </h1>
            <p className='author'>
              The Artist
          </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Itemdetail;
