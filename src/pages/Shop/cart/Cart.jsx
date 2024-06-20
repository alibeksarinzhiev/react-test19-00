import React from 'react';
import photo1 from '../image/1.png'
import photo2 from '../image/2.png'
import photo3 from '../image/3.png'
import './cart.scss'
import {Link} from "react-router-dom";

const Cart = ({el}) => {
    return (


            <div className="cart">
                <Link to={`/oneitem/${el.id}`}>
                    <img src={el.img} alt="" />
                </Link>
                <h4>{el.title}</h4>
                <p><span></span> {el.price}</p>
            </div>

        
    );
};

export default Cart;