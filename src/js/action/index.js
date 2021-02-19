import {ADD_MOVIE,CHANGE_COLOR,DELETE_MOVIE,EDIT_MOVIE} from '../const/actionTypes'

export const addMovie=(payload)=>{
    console.log(payload)
    return {
        type:ADD_MOVIE,
        payload
    }
}

export const editMovie=(payload)=>({
    type:EDIT_MOVIE,
    payload
})

export const changeColor=(payload)=>{
    return {
        type:CHANGE_COLOR,
        payload
    }
}

export const deleteMovie=(payload)=>{
    return {
        type:DELETE_MOVIE,
        payload
    }
}