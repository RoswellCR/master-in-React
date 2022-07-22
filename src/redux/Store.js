import { createStore } from "redux";
//import { INCREMENT, DECREMENT } from "./reducers/counter";
import rootReducer from './reducers'


//ALMACENA EL ESTADO
const store = createStore(rootReducer)

export default store;