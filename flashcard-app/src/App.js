import { useEffect, useRef, useState } from "react";
import FlashcardList from "./FlashcardList";
import './app.css'

import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  const categoryEl = useRef()

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setFlashcards(res.data.results.map((quesitonItem, index) => {
          const answer = decodeString(quesitonItem.correct_answer)
          const options = [...quesitonItem.incorrect_answers.map(a => {
            decodeString(a)
          }), answer]
          return {
            id: `${index}-${Date.now()}`,
            questions: decodeString(quesitonItem.questioin),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
        }))
        console.log(res.data)
      })
  }, [])

  const decodeString = (str) => {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="header">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select ref={categoryEl} id="category"></select>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>

    </>
  );
}
const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2+2',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'Question2',
    answer: 'answer',
    options: [
      'answer',
      '3',
      '4',
      '5'
    ]
  }
]
export default App;
