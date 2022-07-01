import React, {Component} from 'react';
import './global.css'

class Hijo extends Component{
  manejadorClick=()=>{
    this.props.onSaluda("pasando Datos de hijo a padre")
  }
  render(){
    return(
      <div className='box blue'>
        <h1>HIJO</h1>
        <button onClick={this.manejadorClick}>
          
          Saluda
        </button>
        
      </div>
    );
  }
}


class App extends Component {
  manejador=(name)=>{
    alert(" Esto es: "+ name);

  }

  render(){
  return (
    <div className='box red'>
       <Hijo 
       onSaluda={this.manejador}
       />
    </div>
  );
  }
}

export default App;
