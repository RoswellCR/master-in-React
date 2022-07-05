import React, {Component} from 'react';
import './global.css'

class Hijo extends Component{
  handleSubmit = (event) =>{
    event.preventDefault();
    const name = event.target[0].value;
    const mail = event.target[1].value;

    this.props.mostrando({name, mail})
  }
  
  render(){
    return(
      <div className='box blue'>
        <form onSubmit={this.handleSubmit}>
         <input type='text' placeholder="2doNombre" />
         <input type='text' placeholder="Correo Nacional" />   
         <button>
            Enviar 
         </button>   
       </form>
      </div>
    );
  }
}

class InputNoControlado extends Component {
  nombre = React.createRef();
  email = React.createRef();

  handelClick=()=>{
    const nombre = this.nombre.current.value
    const email = this.email.current.value

    //manejo de datos 
    this.props.onSend({nombre, email})
  }

  

  render(){
    return (
      <div>
        <input 
        type="text"
        ref={this.nombre}
        placeholder='Nombre'
        />
        <input 
        type="text"
        ref={this.email}
        placeholder='Email'
        />
      
      <button onClick={this.handelClick}>
        Enviar
      </button>
      
      </div>
    )
  }
}

class App extends Component {
  state = {mostarH1:false}
  aviso=()=>{
     ;
  };
  manejador = (data) => {
    alert(" Esto es: "+ data.name +" "+ data.mail );
      console.log(data)
  };

  send=(data)=>{
    console.log(data)
  }

  render(){
  console.log(this.mostarH1)
    return (
    <div className='box red'>
       <Hijo 
         mostrando={this.manejador}
       />
       <div >
          Info:{this.mostarH1 
          ? "Se han pasado los datos de hijo a padre" 
          : "No se ha pasado data aun de hijo a padre"}
       </div>
       <InputNoControlado 
        onSend={this.send}
       />
       <></>
       
    </div>
    );
  }
}

export default App;
