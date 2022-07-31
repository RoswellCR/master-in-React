import React, { Component } from 'react';
import { connect } from 'react-redux';
import {incrementAsync} from '../redux/actions/counter.Action'

const Controller =(props)=>{
    
    const handler=()=> props.dispatch(incrementAsync)
    //ó >>>incrementAsync(props.dispatch)
    
    return(
        <div>
            <button onClick={handler}>Dispatch</button>
            <h1>{props.state.counter}</h1>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        state 
    }
}


export default connect(mapStateToProps)(Controller)