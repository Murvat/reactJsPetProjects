import React, { useState } from "react";
import './App.css'

const OptionPicker = (props) => {
    let dataArr = Object.values(props.data);
    const [color, setColor] = useState('white')

    const handleOption = (e) => {
        e.preventDefault()
        let pickedElem = e.target.value;
        dataArr.forEach(item => {
            if (item.color === pickedElem) {
                setColor(pickedElem);
            }
        })


    }

    return (
        <div className="container" style={{ backgroundColor: color }}>
            <select className='selectElem' onChange={handleOption}>
                <option value='red'  >Red</option>
                <option value='white'>White </option>
                <option value='blue'>Blue </option>
                <option value='green'>Green</option>
                <option value='yellow'>Yellow</option>
            </select>
        </div>
    )
};

export default OptionPicker;