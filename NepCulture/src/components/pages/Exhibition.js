import React, { useState, useEffect } from 'react';
import './Exhibition.css';
// import ExhibitItem from './ExhibitItem';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Exhibition = (props) => {
    {
        const [products, setproduct] = useState([])

        useEffect(() => {
            loadproduct()
        }, []);

        const loadproduct = async () => {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/product/item/`)
            console.log(result)
            setproduct(result.data.reverse())



        }

        return (
            <div className='container'>
                <br /><br />
                <p style={{ fontSize: "40px", textAlign: "center", fontWeight: "bold" }}> FEATURED EXHIBITION </p><br /><br />
                {/* <div className='col-4'> */}

                <div className="col">
                    <div className="row" >
                        {
                            products.map((product)=>(
                                <div className="col-12 col-md-6 col-lg-3" style={{ "padding-bottom": "30px" }} key={product.id}>
                            <div className="card" >
                                <img className="card-img-top" src={product.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title" style={{ color: "blue" }}>{product.title}</h4>
                                    <p style={{ color: "red" }}>Price: Rs. {product.price}</p>

                                    <p className="card-text">{product.descreption}</p>
                                    <div className="row">
                                        <div className="col">
                                            <p className="btn btn-danger btn-block"><Link to={`/item_detail/${product.id}`} style={{ textDecoration: "none", color: "white" }}>View Detail</Link></p>
                                        </div>
                                        <div className="col">
                                            <a href="\main-cart-section" className="btn btn-success btn-block">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                            ))
                        }
                        
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Exhibition;