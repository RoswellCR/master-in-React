import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/ninja' activeClassName='active'>Ninja</NavLink>
    <NavLink to='/videos' activeClassName='active'>Videos</NavLink>
  </nav>
)

const Home = () => (
  <h1>Home</h1>
)

const Ninja = () => (
  <h1>Ninja</h1>
)

const Videos = () => (
  <h1>Videos</h1>
)

const NavegacionImperativa = ({ history }) => {
  console.log(history)

  return (
    <div>
      <button onClick={history.goBack}>
        Atras
      </button>
      <button onClick={history.goForward}>
        Adelante
      </button>
      <button onClick={() => {
        history.go(-2)
      }}>
        Go 2
      </button>
      <button onClick={() => {
        history.replace('/ninja')
      }}>
        GO NINJA
      </button>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route render={NavegacionImperativa} />
      <Route path='/' exact render={Home} />
      <Route path='/ninja' render={Ninja} />
      <Route path='/videos' render={Videos} />
    </BrowserRouter>
  )
}

export default App