
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// //creadores de acciones 
export const increment = ()=>{
    return {
        type:INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type:DECREMENT
    }
}