import React from 'react';
import {connect} from 'react-redux';
import {addFruit} from '../redux/actions/fruits.Action';


const Fruits = ({ fruits, addFruit }) => {
  
  const handlerSubmit = (e) =>{
    e.preventDefault();
    const fruit = e.target[0].value
    e.target[0].value=''
    addFruit(fruit)
  }
  
    return (
    <div>
      <h1>Fuits: </h1>
      <form onSubmit={handlerSubmit}>
      <input type='text' placeholder='Add your fruit'/>
      <button>Agregar</button>
      </form>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={fruit + index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        fruits: state.fruits
    
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addFruit: (fruit)=>dispatch(addFruit(fruit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fruits);