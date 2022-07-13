import React, {Component} from 'react';
//import './global.css'
// const URL= 'https://jsonplaceholder.typicode.com/users/

//No recomendado usar este tipo de patron
class Header extends Component{
  render(){
    return (
        <>
          <p>Hijo a Padre</p>
          <h1> Event Bubbling</h1>
        </>
    );
  }
}    

class Hijo extends Component {
  handleClick = (e) => {
    //e.stopPropagation();
    e.saludo = "Hola mensaje desde el hijo";
    console.log("click en <Hijo/>");
  };

  render() {
    return (
      <div style={boxStyles} onClick={this.handleClick}>
        <p>Hijo</p>
      </div>
    );
  }
}
const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
} 
class App extends Component {
  handleClick = (e) => {
    console.log('click en <Padre/>', e.saludo)
  }

  render() {


    return (
      <div style={boxStyles}
        onClick={this.handleClick}
      >
        
        <Header />
        <Hijo />
      </div>
    );
  }
}

export default App;
