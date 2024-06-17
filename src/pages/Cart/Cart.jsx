import React from 'react';
import Line from './img/—.png'
import Delete from './img/Vector 3.png'
import Item from './img/Товар.png'
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
                    <div className="cart__block__titles">
                        <div className='cart__block__left'>
                            <h2>Товар</h2>
                            <h2>Цена</h2>
                        </div>
                        <div className='cart__block__right'>
                            <h2>Количество</h2>
                            <h2>Всего</h2>
                        </div>
                    </div>
                <div className='cart__block__line'></div>
                <div className="cart__block__item">
                    <div className="cart__block__left">
                    <div className='cart__block__item__name'>
                        <img src={Delete} alt="" />
                        <div className='cart__block__item__img'>
                            <img src={Item} alt="" />
                            <h2>Футболка USA</h2>
                        </div>
                    </div>
                    <div className="cart__block__item__price">
                        <h2>$129</h2>
                    </div>
                    </div>

                    <div className='cart__block__right'>
                    <div className="cart__block__item__count">
                        <h2>1</h2>
                    </div>
                    <div className="cart__block__item__total">
                        <h2>$129</h2>
                    </div>
                    </div>
                </div>
                <div className="cart__block__coupon">
                    <h2>Введите купон</h2>
                    <input type="text"  placeholder=''/>
                </div>
                <div className="cart__block__total">
                    <h2>Подытог:<span>$129</span></h2>
                    <div>
                    <h2>Итогo:<span>$129</span></h2>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Cart;