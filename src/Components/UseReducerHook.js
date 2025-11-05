import React from "react";
import { useReducer } from "react";

// It is alter net of useState Hook
// useState Hook Built On useReducer Hook
// useState Hook use useReducer Internally.
// useState Hook only manage simple state transformation but useReducer Hook is a Additional Hook for manage 
// -- complex state logic
// use can do every thing using useReducer Hook which you can do with useState Hook
//**** The Function always returns same output if the same arguments were passed in (Main Theory of useReduce Hooks) ****/
/*
    const reducer = (state,action) => {
         return singleValue/newState;
    }

    const [count,dispatch] = useReducer(reducer,initialState);
*/
function UseReducerHook(){
   
   const initialState = 0;
   const reducer = (state,action) => {
         switch(action)
         {
            case 'increment':
                 return state+1
            case 'decrement':
                 return  (state != 0) ? state-1 : state
            case 'reset':
                return initialState
            default:
                return state
         }
   }

  const [count,dispatch] = useReducer(reducer,initialState);

   return(<>
           <div>
             <h3>Use Reducder Hook... </h3>
             <h4>Count={count}</h4>
             <button onClick={()=>dispatch('increment')}>Increment</button>
             <button onClick={()=>dispatch('decrement')}>Decrement</button>
             <button onClick={()=>dispatch('reset')}>Reset</button>
           </div>
          </>);

}

export default UseReducerHook;
