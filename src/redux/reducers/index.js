import { combineReducers } from "redux";
import counter from "./counter.Reducer";
import user from './user.Reducer';
import fruits from './fruits.Reducer';
import todo from './todoReducer';

export default combineReducers({
        counter,
        user,
        fruits,
        todo
    }
)