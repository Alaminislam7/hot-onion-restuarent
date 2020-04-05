import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, product) => total + product.price, 0)

    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }
    const formatNumbar = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    const tax = (total/10);
    const grandTotal = ( total + shipping + parseFloat(tax) ).toFixed(2);
    return (
        <div>
            <h2>Total Product:</h2>
            <p>Sub Total {cart.length}Item : $ {formatNumbar(total)}</p>
            <p>
                <small> Vat + Tax $ { formatNumbar(tax) } </small>
            </p>
            <p>Delivery Fee: $ {shipping}</p>
            <p>Total: $ {grandTotal}</p>
            <Link to='/review'>
                <button>Place Order</button>
            </Link>
        </div>
    );
};

export default Cart;