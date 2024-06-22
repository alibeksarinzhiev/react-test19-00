import React from 'react';
import './cart.scss'
import {Link} from "react-router-dom";

const Cart = ({el}) => {
    return (


            <div className="cart">
                <Link to={`/oneitem/${el.id}`}>
                    <img className='imgShop' src={el.img} alt="" />
                </Link>
                <h4>{el.title}</h4>
                <p className='discounted-price'>
                    <span className='price'>{el.price}</span>
                    {el.price-(el.price/100 * el.sale)}
                </p>
            </div>

        
    );
};

export default Cart;