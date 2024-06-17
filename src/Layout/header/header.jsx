import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import logo from "./img/dress (1) 1.png";
import phone from "./img/Заказ звонка.png";
import phoneHover from "./img/Заказ звонка (hover).png";
import cart from "./img/shopping-bags 1.png";
import { FiUserMinus } from "react-icons/fi";
import { LuUserCheck2 } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();

  const [scrollY, setScrolly] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrolly(window.pageYOffset);
    });
  }, []);

  const [imgPhone, setImgPhone] = useState(true);

  let imgH = document.querySelector(".header__img");
  imgH?.addEventListener("mouseenter", () => {
    setImgPhone(false);
  });
  imgH?.addEventListener("mouseleave", () => {
    setImgPhone(true);
  });

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);



    





   

   const logout =()=>{
    localStorage.removeItem('user')
    setUser('')
   }



    

    return (
        <header className={`${scrollY<10?'header':'header scrolled'}`}>
        <div className="header__container container">
            <div className="header__logo">
                <img src={logo} alt="" />
                <h3>Womazing</h3>
            </div>
            <ul className="header__lists">
          <li onClick={() => navigate("/")}>Главная</li>
          <li onClick={() => navigate('/shop')}>Магазин</li>
          <li onClick={() => navigate("/about")}>О бренде</li>
          <li onClick={()=>navigate('/contact')}>Контакты</li>
        </ul>
            <div className="header__info">
                <p>  <img className='header__img' src={imgPhone?phone:phoneHover} alt=""/> +7 (495) 823-54-12</p>
                <img src={cart} alt="" />
                <p>{user?.name}</p>
               
                    <span className='header__user'> {user?<LuUserCheck2/>:
                    <Link to='/register'>
                    <FiUserMinus />
                    </Link>
                    }</span>
                 
                    {user?<button onClick={logout}>выход</button>:''}
            </div>
          
        </div>
        
        
    </header>
  );
};

export default Header;
