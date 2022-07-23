
export const ADD_FRUIT = 'ADD_FRUIT';

export const addFruit=(fruit)=>{
    return {
        type: ADD_FRUIT,
        payload: {
            fruit
        }
    }
}