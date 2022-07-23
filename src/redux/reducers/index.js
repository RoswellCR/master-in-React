import { combineReducers } from "redux";
import counter from "./counter.Reducer";
import user from './user.Reducer';
import fruits from './fruits.Reducer';

export default combineReducers({
        counter,
        user,
        fruits
    }
)