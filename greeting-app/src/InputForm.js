import React, { useState } from "react";
import './app.css'

const InputForm = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if (inputValue === '') {
            setOutput('Please add Name!!!')
            return;
        };

        for (let item of props.data) {
            if (item.name === inputValue && item.age > 18) {
                setOutput('You are welcome!!!');
                return;
            }
        }
        setOutput('You are too young,sorry!!!');
    };

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <label htmlFor="inputName">
                    <input
                        type="text"
                        className='input-1res'
                        name="inputName"
                        value={inputValue}
                        onChange={inputChangeHandler}
                    />
                </label>
                <button type="submit" className="btn">Click</button>
            </form>
            <div className="output">{output}</div>

        </div>
    );
};

export default InputForm;