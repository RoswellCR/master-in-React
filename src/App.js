import React, {Component} from 'react';
import './global.css'

//al hacer uso de Inputs Controlados se puede tener acceso a los datos que van entrando en
//cada momento, por lo que podremos validarlos.
class InputControlado extends Component {
  state={
    text:'',
    //tieneError: false,
    color: '#E8E8E8'
  }
  actualizar=(event)=>{
    const text = event.target.value
    //const tieneError = text !=='' && text.length< 5
    let color = 'green'
    if(text.trim()=== ''){
      color = '#E8E8E8'
    }
    if(text.trim() !== '' && text.trim().length<5){
      color = 'red'
    }
    this.setState({text, color});
    console.log(text, color);
  }
  render(){
    const styles = {
      border: `1px solid ${this.state.color}`,  //'1px solid red' :'1px solid #E8E8E8',
      padding: '0.3em 0.6em',
      outline: 'none'
    }
    
    return (
      <input 
        type='text'
        value={this.state.text}
        onChange={this.actualizar} //llamara al metodo actualizar
        style={styles}
        />
    )
  }
}

class App extends Component {
  
  render(){
  
    return (
    <div className='box red'>
       <h1>Inputs Controlados</h1>
       <InputControlado 
        
       />
     </div>
    );
  }
}

export default App;
