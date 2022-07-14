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
  const [clicks, setClicks] = useState(0)
  const [emoji, setEmoji] = useState('🌎')

  const handleClick=()=>{
  setClicks(clicks+1)
 }
 const toggleEmoji=()=>{
   const nextEmoji = emoji === '🌎'? '😍' : '🌎'
   setEmoji(nextEmoji)
 }

  useEffect(()=>{
    alert('usando useEfect cuando cambie el emoji')
  },[emoji])

  return (
    <>
      <Header />
      <button onClick={handleClick}> ADD {clicks} </button>
      <button onClick={toggleEmoji}> Alternar Emoji{emoji} </button>
      <h1>{emoji}</h1>
    </>
  );
};
export default App;
