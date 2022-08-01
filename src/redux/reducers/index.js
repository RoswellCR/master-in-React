import { combineReducers } from "redux";
import counter from "./counter.Reducer";
import user from './user.Reducer';
import fruits from './fruits.Reducer';
import todo from './todoReducer';
import blogs from './posts.Reducer'

export default combineReducers({
        counter,
        user,
        fruits,
        todo,
        blogs
    }
)