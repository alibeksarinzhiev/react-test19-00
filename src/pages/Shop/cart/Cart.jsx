import React from 'react';
import photo1 from '../image/1.png'
import photo2 from '../image/2.png'
import photo3 from '../image/3.png'
import './cart.scss'

const Cart = () => {
    return (

        <div className="carts">
            <div className="cart">
                <img src={photo1} alt="" />
                <h4>Футболка USA</h4>
                <p><span></span> $129</p>
            </div>
            <div className="cart">
                <img src={photo2} alt="" />
                <h4>Купальник Glow</h4>
                <p><span></span> $129</p>
            </div>
            <div className="cart">
                <img src={photo3} alt="" />
                <h4>Свитшот Sweet Shot</h4>
                <p><span></span> $129</p>
            </div>
        </div>
        
    );
};

export default Cart;