import { createStore } from "redux";
import { INCREMENT, DECREMENT } from "./reducers/counter";
import rootReducer from './reducers'

// //creadores de acciones 
export const increment = ()=>{
    return {
        type:INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type:DECREMENT
    }
}

//ALMACENA EL ESTADO
const store = createStore(rootReducer)

export default store;