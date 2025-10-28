import React,{useState,useEffect} from "react";

function UseEffectwithArrayParameter(){
const[count,setCount] = useState(0);

// Maximum update depth exceeded. This can happen when a component calls setState inside useEffect,
// but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
// counter increase automatically if we do not pass [] (array)
// if pass array then user effect do task only one time

// Not Pass [] Here..
// useEffect(()=>{
// setCount(count+1);
// })

useEffect(()=>{
setCount(count+1);
},[])


return(<>
<h6>Auto Count: {count}</h6>
</>);
}

export default UseEffectwithArrayParameter;