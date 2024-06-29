import React, { useState } from "react";
import './App.css';


const Button = ({ onPlus, onMinus, state }) => {
    // console.log(props)
    // const [state, setState] = useState(0);
    // let res = state;

    // const HandlePlus = () => {
    //     res++

    //     setState(res);
    // };
    // const HandleMinus = () => {
    //     res--;
    //     setState(res)
    // };
    return (
        <>
            <div className="btn">
                <button onClick={onPlus} className="btn-1">Press +1</button>
                <button onClick={onMinus} className="btn-2">Pres -1</button>
            </div >
            <div className="res"><p >{state}</p></div>
        </>
    )
}

export default Button;