import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = (props) => {
    const {productKey} = useParams();
    const product = fakeData.find(pd=>pd.key === productKey);
    const {name, details, price, img} = product;

    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='productDetails'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <div className="productContent">
                            <h1>{name}</h1>
                            <p>{details}</p>
                            <h2>{price}</h2>
                            <Link to='review'>
                                <button className='s-btn'
                                onClick={ () => handleAddProduct(product) }
                                product={product}
                                ><FontAwesomeIcon className='icon' icon={faShoppingCart}/>Add</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="img">
                            <img src={img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;