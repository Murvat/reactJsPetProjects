import './App.css';
import React from 'react'
import data from './data/data.json'
import getQuotes from './dataGateway';
import { useState } from 'react';
function App() {
  let quotesArr = getQuotes(data);
  const [currQuote, setQuote] = useState(quotesArr[0]);

  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * quotesArr.length)
    setQuote(quotesArr[randomNum]);

  }
  return (<>
    <div className="container">
      <button
        className="generateQuote"
        onClick={handleClick}>Click and get inspiration</button>
      <div className="output">{currQuote}</div>
    </div>
  </>
  );
}

export default App;
