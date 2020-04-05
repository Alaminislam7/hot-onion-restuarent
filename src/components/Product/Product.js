import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

const Product = (props) => {
    console.log(props.handleBreckfast)
    const {img, name, description, category, price,key} = props.product
    return (
        <div className='products'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 offset-md-1">
                        <Link to={"/"+key}>
                            <div className="card" style={{width: '18rem'}}>
                                <img className="card-img-top" src={img} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4>{name}</h4>
                                    <p>{description}</p>
                                    <h4>{price}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;