import { createStore , applyMiddleware} from "redux";
//import { INCREMENT, DECREMENT } from "./reducers/counter";
import rootReducer from './reducers'

const confirmDeleteTodo=(store)=>(next)=>(action)=>{
    console.log('se va a realizar una nueva accion', action)
    if(action.type==='DELETE_TODO'){
         let conf = window.confirm('Seguro que quiere eliminar el todo')
         if(conf){
             next(action)
         }
    }
    else{
        next(action)
    }
}


//ALMACENA EL ESTADO
const store = createStore(rootReducer, applyMiddleware(confirmDeleteTodo))

export default store;