import React from "react";

export default function Render({list,handlecart})

{
return(
        <div className='outerDiv'>
        {list.map((item) => {
        
        return <div className="box">
            <div className="render">
            <li key={item.id}>
            <img src={item.src} alt={item.title} className="imagesize"/>
                <h1 className="boxtitle"> {item.title}</h1>
            <div className="priceCart">
                <div className="price">₹ {item.price}.</div>
                <img src="images/carticon1.jpg" className="iiimagesize" onClick={() =>{handlecart(item.id)}}/>
            </div>
            </li>

    </div>
    </div>
    })}
        </div>
)
};