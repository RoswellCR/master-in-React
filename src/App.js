import React, {Component} from 'react';
//import './global.css'
// const URL= 'https://jsonplaceholder.typicode.com/users/


const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}
//retorna{Provider, Consumer}
  const {Provider, Consumer} = React.createContext();


class Nieto extends Component {
  
  render() {
    return (
      <Consumer>
        {(context)=>(
          <div style={boxStyles}>
            <h1>Nieto</h1>
            <button onClick={context.addClicks} >Disparar {context.clicks}</button>
          </div>
        )}
      </Consumer>
    );
  }
}
class Hijo extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <h1>Hijo</h1>
        <Nieto />
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return <h1>Context API</h1>;
  }
}
class App extends Component {
  state={
    clicks:0
  }
  addClicks=()=>{
    this.setState(state=>({clicks: state.clicks +1} ))
  }

  render() {
    return (
      <Provider 
        value={{
          clicks:this.state.clicks,
          addClicks:this.addClicks
        }}
        
        >
        <div style={boxStyles}>
          <Header />
          <Hijo />
        </div>
      </Provider>
      
    );
  }
}

export default App;
