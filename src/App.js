import React, {Component} from 'react';
import './global.css'

class Hijo extends Component{
  
  manejadorClick=()=>{
     this.props.onSaluda("pasando Datos de hijo a padre");
    
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
  state = {mostarH1:false}
  aviso=()=>{
     ;
  };
  manejador = (name) => {
    alert(" Esto es: "+ name);
      this.setState((state)=>this.mostarH1= true);
  };

  render(){
  console.log(this.mostarH1)
    return (
    <div className='box red'>
       <Hijo 
         onSaluda={this.manejador}
       />
       <div >
          Info:{this.mostarH1 
          ? "Se han pasado los datos de hijo a padre" 
          : "No se ha pasado data aun de hijo a padre"}
       </div>
       
    </div>
    );
  }
}

export default App;
