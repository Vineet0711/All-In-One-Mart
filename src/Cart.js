import React from "react";

 export default function Carty({box,handletrash,itemCount,setItemCount}){
    let k = 0;
    let count = 0;
    let n = 0;
    let myMap = new Map();
    let newmap = new Map();
    {box.map((cur) => {
        myMap.set(cur.id,(myMap.get(cur.id) || 0)+1)
    })}
    return (
        <div>

    {setItemCount(count)}
         {box.map((element) =>{
            if(newmap.has(element.id)){return}
            else{
            newmap.set(element.id,1)
            {k += myMap.get(element.id) * element.price}
            {count += myMap.get(element.id)}
            {setItemCount(count)}
            {n += 1}
            return <div className="item">
            <img src = {element.src} className = "iimagesize"/>
            <h2>{element.title.toUpperCase()}</h2>
            <button className="btn">Buy Now</button>
            <div className="itemPrice">₹ {element.price}</div>
            <div className="qty">Quantity: {myMap.get(element.id)} </div>
            <img src = "images/trash.jpg" alt = "Delete"  className = "trash"  onClick={() => handletrash(element.id)}/></div>
        
 }})}
        <div>
            <button className="btn1">PLACE ORDER</button>
            <div className="item-count"> Number of items : {count}</div>
            <h3 className="total"> Total : ₹ {k} </h3> 
        </div>
        
        
        </div>


)
 }