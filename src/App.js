import React from 'react'
import { BrowserRouter, Route, Link , NavLink } from 'react-router-dom'

const Hola = () => {
  return (<h1>Hola</h1>)
}

const Productos = () => {
  return <h1>Productos</h1>
}


const Home = (props) => {
  console.log(props);
  return(
    <h1>Home</h1>
  )
}


const Navegation = ()=> {
 //console.log("navigation");
 return (
   <nav>
     <NavLink
       to="/"
       exact
       activeStyle={{ color: "orangered" }}
       activeClassName={{ color: "green" }}
     >
       {" "}
       Home{" "}
     </NavLink>
     <NavLink
       to="/hola"
       activeStyle={{ color: "orangered" }}
       activeClassName={{ color: "green" }}
     >
       {" "}
       Hola{" "}
     </NavLink>
     <NavLink to="/productos" 
     activeClassName={{ color: "green" }}
     isActive={(match, location)=>{
       return false
       }}>
       {" "}
       Productos{" "}
     </NavLink>
   </nav>
 );
}


const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route
          path='/'
          exact
          render={Home}
        />
      <Route
        path='/hola'
        render={Hola}
      />
      <Route
          path='/productos'
        render={Productos}/>
      </BrowserRouter>
  )
}

export default App;