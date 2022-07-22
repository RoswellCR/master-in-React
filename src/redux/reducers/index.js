import { combineReducers } from "redux";
import counter from "./counter.Reducer";
import user from './user.Reducer';

export default combineReducers({
        counter,
        user
    }
)