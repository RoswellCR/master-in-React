import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = () => (
  <h1>Home</h1>
)

const HolaTodos = () => (
  <h1>Hola a todos</h1>
)


const App = () => {
  return (
    <BrowserRouter>
      <Route
          path='/'
          exact
          component={Home}
        />
      <Route
        path='/hola'
        exact
        component={Hola}
      />
      <Route
          path='/productos'
          component={Productos}
        />
      <Route
          path='/hola/todos'
          component={HolaTodos}
        />  
    </BrowserRouter>
  )
}

export default App;