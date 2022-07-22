import {INCREMENT, DECREMENT} from '../actions/counter.Action'

const initialState= 0;

//funcion reducer
function counter (state= initialState, action){
    switch (action.type) {
        case INCREMENT:
            return state +1;
        case DECREMENT:
            return state -1;   
    
        default:
            return state;
    }
}

export default counter;