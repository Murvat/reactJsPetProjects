import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    inputRef.current.focus();
  };

  const handleEvaluate = () => {
    try {
      setInput((prevInput) => eval(prevInput).toString());
    } catch (error) {
      setInput('Error');
    }
    inputRef.current.focus();
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        ref={inputRef}
        readOnly
        className="calculator-display"
      />
      <div className="calculator-buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
