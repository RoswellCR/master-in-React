import React, { Children, lazy, Suspense, useCallback, useContext, useEffect, useReducer, useRef, useState } from "react";
//import Images from "./components/Images";
//import './global.css'

//code splitting - Importacion dinamica
const Image = lazy(()=> import("./components/Image"));

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


const App = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  return (
    <div style= {styles}>
      <button onClick={toggle}>{show ? "Ocultar" : "Mostrar"}</button>
      {show && (
        <Suspense fallback={<h1>cargando...</h1>}>
          <Image />
        </Suspense>
      )}
    </div>
  );
};
export default App;
