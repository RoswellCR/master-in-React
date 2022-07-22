import React, { Component } from 'react';
import {connect} from 'react-redux'
import {increment, decrement} from '../redux/Store';

const Counter = (props)=>{
    console.log(props);
    
    
    return (
        <div>
            <button onClick={props.increment}>
                +
            </button>
            <button onClick={props.decrement}>
                -
            </button>
            <h1>{props.count}</h1>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        count: state //se declara aqui lo que se va a recibir de store, 
                    //  se conecta a la store
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);