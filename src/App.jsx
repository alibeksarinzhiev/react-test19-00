import React, { useEffect, useState } from 'react';
import './app.scss'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import Layout from './Layout/Layout';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import axios from 'axios';

const App = () => {
    const [products,setProducts] = useState(0)

useEffect(()=>{
    axios('https://fakestoreapi.com/products')
    .then(({data})=>setProducts(data))
},[])
    const name = 'alibek234567'

    return (
        <>
        <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home products={products} name={name}/>}/>
            <Route path='about' element={<About products={products}/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>

        
        </Routes>
     
     

            
        </>
    );
};

export default App;