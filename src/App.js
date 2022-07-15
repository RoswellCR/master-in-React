import React, { useEffect, useState } from "react";
//import './global.css'


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
  const [users, setUsers] = useState([])
  const [isFetching,setIsFetching] = useState(true); 

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
   .then(res=>res.json())
   .then(users=> {
     setUsers(users) 
     setIsFetching(false)})
   console.log(users)
  },[])

  return (
    <>
      <Header />
      {isFetching && <h1>Cargando Datos...</h1>} 
      <ul>
      {users.map(user=>(
        <li key={user.id}>
          {user.name}
        </li>
      ))

      }
      </ul>
      
      <h1>{}</h1>
    </>
  );
};
export default App;
