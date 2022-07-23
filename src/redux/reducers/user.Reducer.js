import {UPDATE_NAME} from '../actions/user.Action'

const initialState= {
    name: 'Rosbel',
    country: 'Cuba'
}

function user (state=initialState, action){
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload.name,
            }
        default:
          return state 
    }
}

export default user;