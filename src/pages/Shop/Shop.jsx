import React from 'react';
import './shop.scss'
import Cart from './cart/Cart';
import { Link } from 'react-router-dom';
import arrowRight from '../Shop/image/Vector 1.png'

const Shop = () => {
    return (
        <>
        <section className='shop'>
            <div className="shop__container container">
                <h1>Магазин</h1>
                <p className='shop__text'>Главная - <span>Магазин</span></p>
                <ul className="shop__category">
                    <li><Link to="/all" >Все</Link></li>
                    <li><Link to="/coats">Пальто</Link></li>
                    <li><Link to="/sweatshirts">Свитшоты</Link></li>
                    <li><Link to="/cardigans">Кардиганы</Link></li>
                    <li><Link to="/hoodies">Толстовки</Link></li>
                </ul>
                <div className="shop__products-box">
                    <p>Показано: <span>9</span> из <span>12</span> товаров</p>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <p>Показано: <span>9</span> из <span>12</span> товаров</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li><img src={arrowRight} alt="" /></li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
};

export default Shop;