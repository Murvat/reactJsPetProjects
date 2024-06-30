import React from "react";
import users from "./users";
import InputForm from "./InputForm";
import './app.css'
let usersArr = users();
const App = () => {

    return (
        < div className="container" >
            <InputForm data={usersArr} />
        </div >
    )
};

export default App;