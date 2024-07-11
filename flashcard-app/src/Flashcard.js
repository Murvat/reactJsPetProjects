import React, { useEffect, useRef, useState } from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('initial')

    const frontEL = useRef();
    const backEl = useRef()
    function setMaxHeight() {
        const frontHeight = frontEL.current.getBoundingClientRect().height;
        const backHeight = backEl.current.getBoundingClientRect().height;
        Math.max(frontHeight, backHeight, 100)
    }
    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])
    return (
        <div
            style={{ height: height }}
            onClick={() => setFlip(!flip)}
            className={`card ${flip ? 'flip' : ''}`}>
            <div className="front" ref={frontEL}>
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flaschard-option">
                            {option}
                        </div>
                    })}

                </div>
            </div>
            <div className="back" ref={backEl}>{flashcard.answer}</div>
            {flip ? flashcard.answer : flashcard.question}
        </div >
    )
}
