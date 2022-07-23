
export const UPDATE_NAME = 'UPDATE_NAME'

//creadora de acciones
export const updateName = (name)=>{
    return {
        type: UPDATE_NAME,
        payload:{
            name
        }
    }
}