import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = (props) => {
  console.log(props);
  return(
    <h1>Home</h1>
  )
}

const HolaTodos = () => (
  <h1>Hola a todos</h1>
)

const Navegation = ()=> {
 //console.log("navigation");
 return (
 <nav>
   <Link to={{
     pathname:'/',
     search : '?ordenar=nombre',
     hash: '#hash-otro',
     state: {
       nombre: 'roswell',
       age: 30
     }
  }} 
  > Home </Link>
   <Link to="/hola"> Hola </Link>
   <Link to="/productos"> Productos </Link>
 </nav>)
}


const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route
          path='/'
          exact
          component={Home}
        />
      <Route
        path='/hola'
        
        render={Hola}
      />
      <Route
          path='/productos'>
        {({match})=>{
          if(!match) return <div>Wops, no coincide con '/productos'</div>
          return (<Productos/> )}}
      </Route>      
    </BrowserRouter>
  )
}

export default App;