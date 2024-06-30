import React from "react";
import users from "./users";
import InputForm from "./InputForm";
import './app.css'
let usersArr = users();
const App = () => {

    return (
        < div className="container" >
            <InputForm data={usersArr} value='add name...' />
        </div >
    )
};

export default App;