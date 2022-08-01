
export const FETCH_POSTS_RQ='FETCH_POSTS_RQ';
export const FETCH_POSTS_SUCCES='FETCH_POSTS_SUCCES';
export const FETCH_POSTS_ERROR='FETCH_POSTS_ERROR';

export const fetchPosts = () => (dispatch) => {
  
    dispatch({type:FETCH_POSTS_RQ})
  
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POSTS_SUCCES,
        payload: {
          posts,
        },
      });
    })
    .catch(error=>{
        dispatch({
            type:FETCH_POSTS_ERROR,
            payload:{error:error.toString()}
        })
    })
    
};
