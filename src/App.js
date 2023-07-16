import React,{useState} from 'react';
import {items} from './data'
import Navigation from './Navbar';
import Render from "./Render";
import Carty from "./Cart"
import "./App.css";

function App() {
  const[count,setCount]=useState(0);
  const[arr,setArr]=useState(items);
  const[cart,setCart]=useState([]);
  const[visible,setVisible]=useState(false)

  
  function handlerendering(para){
    if(para==="All"){
      return setArr(items)
    }

    const listeditems = items.filter((e) =>{
      return (e.category === (para));
        
    });
    setArr(listeditems);

    
  }
  function handlecart(num){
    items.map((ele) => {
       if(ele.id === num){
          setCart([...cart,ele])
       };

    })
  }
  function handledelete(Id){
    const next = cart.filter((item) =>{
      return item.id !== Id;

  })
  setCart(next)
  }

  function handlevisible(){
    setVisible(!visible)
  }



    return (
      <div>
        <h1 className='title'>All-In-One Mart</h1>
        <div className='container'>
        <img src="images/cart.jpg" onClick={handlevisible} className='buttton' />
        <div className='count' ><p>{count}</p></div>
        <div id={(visible&&count!='0')?"open":"close"} className='dropdown-box'><Carty itemCount={count} setItemCount={setCount} box={cart}  handletrash={handledelete}/></div>
        </div>
        <Navigation handlenav={handlerendering}/>
        <img className='otherimg' src='images/other.jpg'></img>
        <Render  list={arr} handlecart={handlecart}/>
        

        
      </div>

    )
    }

    

export default App;
