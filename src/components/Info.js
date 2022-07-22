import React from 'react';
import {connect} from 'react-redux';

const Info = (props)=> {
    
    return(
        <div>
            <h1> Name : {props.name} Counter : {props.counter}</h1>
        </div>
    ) 
}

const mapStateToProps=(state)=>{
    return{
        name: state.user.name,
        counter:  state.counter 
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);