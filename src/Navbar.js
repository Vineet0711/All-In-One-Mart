import React from "react";
import "./App.css";

 const navi = ["All","clothes","food","electronics","Hogswarts"]

export default function Navigation(props){

    return(<nav className="outernav"> {navi.map((n) => {

        return (<buttton className="navbar" onClick={() => {props.handlenav(n)}}>  {n} </buttton>)
            })}
            
            </nav>

    
    )
}