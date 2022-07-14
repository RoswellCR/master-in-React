import React, { useState } from "react";
//import './global.css'
// const URL= 'https://jsonplaceholder.typicode.com/users/

const boxStyles = {
  padding: "0.5em",
  margin: "0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

const Header = () => {
  return <h1 style={boxStyles}> Hook *useState* </h1>;
};

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [title, setTitle] = useState("");

  const addClicks = () => {
    setClicks(clicks + 1);
  };

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Header />
      <input type="text" value={title} onChange={handleInput} />
      <button onClick={addClicks}> Clicks {clicks}</button>
      <h3>{title}</h3>
    </>
  );
};
export default App;
