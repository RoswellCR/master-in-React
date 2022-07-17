import React, { Children, useCallback, useContext, useEffect, useReducer, useRef, useState } from "react";
//import './global.css'


const boxStyles = {
  padding: "0.5em",
  margin: "0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

const Header = () => {
  //const context = useContext(MyContext);
  return (
    <>
      <h1 style={boxStyles}> Hooks useMemo and useCallBack</h1>
    </>
  );
};

 const getRandomColor=()=>'#'+Math.random().toString(16).slice(2, 8)
 
 const Button=React.memo(({callback, children})=>{
  const styles={
    padding: '1em',
    fontSize: '20px',
    background: getRandomColor()
  }
  return (
    <button style={styles} onClick={callback}> 
      {children}
    </button>
  )
 })

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  
  const incrementA= useCallback(()=>{
    setA(a => a+1)
  },[])

  const incrementB= useCallback(()=>{
    setB(b => b+a)
  },[a]) //se actualiza cuando a cambia

  return (
    <>
      <Header />
      <Button callback={incrementA}>
        Increment A
      </Button>
      <Button callback={incrementB}>
        Increment B
      </Button>
      <h1>{`A: ${a} B: ${b}`}</h1>
    </>
  );
};
export default App;
