import './App.css';
import React from 'react'

function App() {
  return (
    <div className='container'>
      <div className="calculatorUi">
        <div className="output"></div>
        <div className="calculatorFunctions">
          <button className='btnPlus btn'>+</button>
          <button className='btnMinus btn '>-</button>
          <button className='btnMulti btn '>*</button>
          <button className='BtnDiv btn ' >/</button>
          <button className="result btn">=</button>

        </div>
      </div>
    </div >
  );
}

export default App;
