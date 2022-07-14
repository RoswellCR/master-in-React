import React, { useEffect, useState } from "react";
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
  return <h1 style={boxStyles}> Hook *useEfect* </h1>;
};

const App = () => {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMove=(e)=>{
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  useEffect(()=>{
    window.addEventListener('mousemove', handleMove)

    return ()=>{
      window.removeEventListener('mousemove', handleMove)
    } 
  })

  return (
    <>
      <Header />
      <h1> X: {mouseX}  Y: {mouseY}</h1>
    </>
  );
};
export default App;
