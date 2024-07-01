import React from "react";
import OptionPicker from './OptionPicker';
import data from './options.json'




const App = () => {
  return (
    <>
      <OptionPicker data={data} />
    </>
  )
};

export default App;