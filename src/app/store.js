import {configureStore} from '@reduxjs/toolkit'
import  counterSlice  from '../slice/CounterSlice'


export const abc = configureStore({
    reducer : {
        counter : counterSlice
    }
})