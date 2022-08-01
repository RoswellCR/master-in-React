import {FETCH_POSTS_RQ, FETCH_POSTS_SUCCES, FETCH_POSTS_ERROR} from '../actions/posts.Action'

const initialState={
    posts:[],
    isFetching: false,
    error: null
}

function posts (state=initialState, action){
    switch (action.type) {
        case FETCH_POSTS_RQ:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_POSTS_SUCCES:
            return {
                ...state,
                isFetching:false,
                posts: action.payload.posts
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                isFetching:false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default posts;