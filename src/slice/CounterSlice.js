import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name:'counter',
    initialState : 0,

 reducers : {
    inc : (state,action) =>{
        return state += 1
    }
 }


})

export let {inc} = counterSlice.actions
export default counterSlice.reducer