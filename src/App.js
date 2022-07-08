import React, {Component} from 'react';
import './global.css'



    
class App extends Component {
  state = {
    users: [],
    cargando: true
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then(users=>this.setState({users, cargando:false }))
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
