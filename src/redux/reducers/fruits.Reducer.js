import {ADD_FRUIT} from '../actions/fruits.Action';

const initialState = ['fresa', 'manzana'];


function fruits(state=initialState, action){
    switch(action.type){
        case ADD_FRUIT:
        return [ //state.concat(action.payload.fruit)
            action.payload.fruit,
            ...state        
        ]
        
        
        default:
            return state;
    
    }
}
export default fruits;