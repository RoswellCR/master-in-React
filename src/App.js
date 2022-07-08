import React, {Component} from 'react';
import './global.css'
import axios from 'axios';


    
class App extends Component {
  state = {
    users: [],
    cargando: true
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>this.setState({users:res.data, cargando:false }))
    .catch(error=>{
      //manejo de errores
    })
  }

  render(){
    if(this.state.cargando){
      return <h1>Cargando Datos de Usuarios....</h1>
    }

    return (
    <div className='box red'>
       <ul>
       {this.state.users.map(user=>(
         <li key={user.id}> 
         {user.name}
         <a href={`   http://${user.website}`} > Website </a> 
         </li>)
       )}
       </ul>
       
     </div>
    );
  }
}

export default App;
