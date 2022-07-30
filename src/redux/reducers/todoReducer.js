import {ADD_TODO} from '../actions/todo.Action'
import {UPDATE_TODO} from '../actions/todo.Action'
import {DELETE_TODO} from '../actions/todo.Action'


const initialState={
    todos: [
        {
            text:'Crear componente',
            id: 'i4d92',
            checked: false
        }, 
        {
            text:'Subir archivos',
            id: 'j4d32',
            checked: false
        }
    ]  
}

function todo(state = initialState, action){
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    action.payload,
                    ...state.todos
                ]
            }
            case UPDATE_TODO:
                return {
                    ...state,
                    todos: state.todos.map(todo=>{ 
                        if(action.payload.id===todo.id){
                            return {
                                ...todo,
                                checked: !todo.checked
                            }
                        }
                        return todo;
                    })
                }
                case DELETE_TODO:
                    return {
                        ...state,
                        todos: state.todos.filter((todo)=>{
                            return todo.id !== action.payload.id
                        })
                            
                    }            
        default:
            return state;
    }
}

export default todo;