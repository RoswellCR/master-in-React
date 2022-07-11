import React, {Component} from 'react';
import './global.css'


class UserDetails extends Component{
    state = {
       user :{},
       isFetching: false 
    }

    componentDidMount(){
        this.fetchData()
    }
    componentDidUpdate(prevProps, prevState){
      console.log('componentDidUpdate', prevProps, prevState)
      if (prevProps.userID!== this.props.userID){
        this.fetchData();
      }
    }
    
    fetchData=()=>{
      this.setState({
        isFetching: true
      })
      const URL= 'https://jsonplaceholder.typicode.com/users/'+ this.props.userID
     console.log(URL)
     fetch(URL)
      .then(res=> res.json(URL))
      .then(user=>this.setState({user, isFetching: false}))
    }

  render(){
      
      return (
        <div>
          <h1>User Details</h1>
          { this.state.isFetching 
          ? (<h1>Haciendo fetching a data...</h1>)
          : (<pre> {JSON.stringify(this.state.user, null, 4)} </pre>)
          }
        </div>
    )
    }
  }
    
class App extends Component {
  state = {
    id: 2
  
  }
  
  aumentar=()=>{
    this.setState(state => ( {
      id: state.id + 1
    } ))
  }

  render(){
    const {id}= this.state;

    return (
    <div className='box red'>
       <h1>componentDidUpdate</h1>
       <h2>ID: {id}</h2>
       <button onClick={this.aumentar}>
          Aumentar
       </button>
      <UserDetails  userID={id}/>
    </div>
    );
  }
}

export default App;
