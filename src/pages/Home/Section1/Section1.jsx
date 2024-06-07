import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Section1 = ({name}) => {
// const [count,setCount] = useState(0)
//    const [reverse,setReverse] = useState([])
    
        // useEffect(()=>{
        //     axios('https://fakestoreapi.com/products')
        //     .then(({data})=>console.log(data))
        // },[])

       
            // useEffect(()=>{
            //     axios('https://fakestoreapi.com/products')
            //     .then(({data})=>setReverse(data.reverse()))
                
            // },[reverse])
            
        
        
   
    const [todo,setTodo] = useState([])
    const [title,setTitle] = useState('')
    


useEffect(()=>{
    const local = localStorage.getItem('todo') || []
    setTodo(JSON.parse(local))
},[])

useEffect(()=>{
localStorage.setItem('todo',JSON.stringify(todo))
},[todo])

    const addTodo = ()=>{
        setTodo([...todo,{
            id:todo.length + 1,
            title:title
        }])
    }

    const deleteTodo = (id)=>{
        setTodo(todo.filter((el)=>{
                return el.id !==id
        }))
        console.log(todo)
    }

    return (
        <section className='sec1'>
        <h2>это 1 секция</h2>
        
          <input onChange={(e)=>setTitle(e.target.value)} type="text"/>
          <button onClick={addTodo}>добавить</button>
         
          <ul>
            {todo.map((el)=>(
                <li key={el.id}>{el.title} <button onClick={()=>deleteTodo(el.id)}>delete</button></li>
                
            ))}
          </ul>
          <h1>{name}</h1>
        </section> 
    );
};

export default Section1;