import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
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
      <h1 style={boxStyles}> Hooks Ejemplos</h1>
    </>
  );
};
//usar el useReducer cuando exista un estado con muchos valores
  const reducer = (state, action)=>{
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count+1
        }
      case 'DECREMENT':
          return {
            ...state,
            count: state.count-1
          }
      case 'SET_TITLE':
          return {
            ...state,
            title: action.title //se captura el valor por la 'action'
          }   
      default:
        return state;
    }
  }
//inicializando el state para pasarlo al reducer
const initialState = {
  count: 0,
  title:''
}


const App = () => {
  //const [count, setCount] = useState(0);
  //const [title, setTitle] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  


  const increment=()=>{
    dispatch({type : 'INCREMENT'})
  }

  const decrement=()=>{
    dispatch({type : 'DECREMENT'})
  }

  const handleTitle = (e) => {
    //setTitle(e.target.value);
    dispatch({
      type: 'SET_TITLE',
      title: e.target.value
    })
  };

  return (
    <>
      <Header />
      <input
      type='text'
      onChange={handleTitle}
      value={state.title}
      />
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <h1>{`${state.count} : ${state.title}`}</h1>
    </>
  );
};
export default App;
