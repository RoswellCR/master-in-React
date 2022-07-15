import React, { useContext, useEffect, useState } from "react";
//import './global.css'

//{Provider, Consumer}
const MyContext = React.createContext()


const boxStyles = {
  padding: "0.5em",
  margin: "0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

const Header = () => {
  const context = useContext(MyContext)
  return (
    <>
      <h1 style={boxStyles}> Hook *useEfect* con ganador {context.winer}</h1>
    <button onClick={context.handleClick}>  Ganador </button>
    </>
  )
};

const Winer = () =>{
   const context = useContext(MyContext)  
  return(
    <div>
         <p>El ganador es : {context.winer}</p>
       </div>
  )
}

//consumir context de forma tradicional
// const Winer=()=>{
//   <MyContext.Consumer>
//     {(context)=>{
//       <div>
//         <p>El ganador es : {context.winer}</p>
//       </div>
//     }}
//   </MyContext.Consumer>
//}

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFetching,setIsFetching] = useState(true); 
  const [winer, setWiner] = useState('');
  
  const context = useContext(MyContext);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
   .then(res=>res.json())
   .then(users=> {
     setUsers(users) 
     setIsFetching(false)})
   console.log(users)
  },[]);

  const handleClick=()=>{
    setWiner('el primero')
    console.log(winer);
  }

  return (
    <MyContext.Provider value={{
      winer,
      handleClick
    }}>
    <>
      <Header />
      {isFetching && <h1>Cargando Datos...</h1>} 
      <ul>
      {users.map(user=>(
        <li key={user.id} style={boxStyles}>
          {`${user.name} `}
        </li>
      ))
      }
      
      </ul>
      <h1>{winer}</h1>
      <Winer/>
    </>
    </MyContext.Provider>
  );
};
export default App;
