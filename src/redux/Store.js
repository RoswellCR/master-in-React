import { createStore , applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// usar midleware redux-logger para visualizar el estado de la app por consola
//usar thunk para emitir acciones con flujos asincronos
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
const store = createStore(rootReducer, applyMiddleware(confirmDeleteTodo, logger, thunk))

export default store;
