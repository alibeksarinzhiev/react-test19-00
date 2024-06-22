import React from 'react';
import photo1 from '../image/1.png'
import photo2 from '../image/2.png'
import photo3 from '../image/3.png'
import './cart.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/cartSlice";


const Cart = ({el}) => {

    const dispatch = useDispatch()

    const add = (el)=>{
        dispatch(addToCart(el))
    }



    return (


            <div className="cart">
                <Link to={`/oneitem/${el.id}`}>
                    <img src={el.img} alt="" />
                </Link>
                <h4>{el.title}</h4>
                <p><span></span> {el.price}</p>
                <button onClick={()=>add({...el,count:1})}>В корзину</button>
            </div>

        
    );
};

export default Cart;