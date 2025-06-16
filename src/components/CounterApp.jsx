import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { inc } from '../slice/CounterSlice'

function CounterApp() {
 let reduxValue =  useSelector((state) => state.counter)
 let dispatch = useDispatch()
  return (
    <>
    
    
    <h1>Counter Value Is : {reduxValue} </h1>

    <button onClick={()=>dispatch(inc())}>+</button>   
    <button>-</button>
    </>
  ) 
}

export default CounterApp