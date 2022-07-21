import { createStore } from "redux";

const initialState= 0;

function counter (state= initialState, action){
    
    if(action.type==='INCREMENT'){
        return state +1
    }
    if(action.type==='DECREMENT'){
        return state -1
    }
    
    return state
}

const store  = createStore(counter)


store.subscribe(()=>{
    console.log(store.getState())
})
//creadores de acciones 
const increment = ()=>{
    return {
        type:'INCREMENT'
    }
}

const decrement = ()=>{
    return {
        type:'DECREMENT'
    }
}

store.dispatch(decrement())
store.dispatch(increment())

//acciones
store.dispatch({
    type: 'INCREMENT'
})


store.dispatch({
    type: 'DECREMENT'
})