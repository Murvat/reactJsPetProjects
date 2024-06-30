import React from "react";
import './app.css'

const InputForm = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
        let out = document.querySelector('.output');
        let inputVal = document.querySelector('.input-1res').value;
        for (let item of props.data) {
            if (item.name === inputVal && item.age > 18) {
                out.textContent = 'Hello';
                return
            };
        }
        out.textContent = 'You are too young';


    };
    return (
        <>
            <form action="submitting data">
                <label htmlFor="inputName">
                    <input type="text" className='input-1res' name="inputName" defaultValue={props.value} />
                    <button className="btn" onClick={submitHandler}>Click</button>
                </label>
            </form>
            <div className="output"></div>
        </>)
};
export default InputForm;