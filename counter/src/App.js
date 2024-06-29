import React, { useState } from "react";
import Button from "./Button";

const App = () => {
    const [state, setState] = useState(0);

    const handleMinus = () => {
        setState(prevState => prevState - 1);
    }
    const handlePlus = () => {
        setState(prevState => prevState + 1);
    }
    return (
        <div className="container">
            <div className="withLifting">
                <Button state={state} onPlus={handlePlus} onMinus={handleMinus} />
            </div>
            <div className="withoutLifting">
                <Button state={state} onPlus={handlePlus} onMinus={handleMinus} />            </div>

        </div>
    )
}

export default App;