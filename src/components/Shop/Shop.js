import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);

    const handleBreckfast = () => {
        const breckfast = products.filter(pd=> pd.category === 'breakfast');
        return breckfast;
    }
    const handleLunche = () => {
        const lunch = products.filter(pd=> pd.category === 'lunch');
        console.log(lunch)
    }
    const handleDinner = () => {
        const dinner = products.filter(pd=> pd.category === 'dinner');
        console.log(dinner)
    }
    

    return (
        <div classNameName='s-btn'>
            <ul className="nav d-flex justify-content-center">
                <li className="nav-item">
                    <button className="nav-link" onClick={ () => handleBreckfast() }>Breakfast</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link"  onClick={ () => handleLunche() }>Lunch</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link"  onClick={ () => handleDinner() }>Dinner</button>
                </li>
            </ul>
            {
                products.map(pd=> <Product 
                    product={pd}
                    handleBreckfast = {handleBreckfast}
                    ></Product>)
            }
        </div>
    );
};

export default Shop;