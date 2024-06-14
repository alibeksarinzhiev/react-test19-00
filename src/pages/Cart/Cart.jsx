import React from 'react';
import Line from './img/—.png'
import './Cart.scss'

const Cart = () => {
    return (
        <section className='cart'>
            <div className="cart__container container">
                <div className="cart__title">
                <h1>Корзина</h1>
                <p>
                    <span>Главная</span><img src={Line} alt="" /><span>Корзина</span>
                    </p>
                </div>
                <div className="cart__block">
                    <div className="block__titles">
                        <div className=''>

                        </div>
                        <div>

                        </div>
                    </div>
                <div className='cart__block__line'></div>
            </div>
            </div>
        </section>
    );
};

export default Cart;