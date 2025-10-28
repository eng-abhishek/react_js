import React,{useState,useEffect} from 'react';
function UseEffectHooks(){
const [count,setCount] = useState(0);

const IncreaseCounter = () => {
    setCount(count+1);
}

const DecreaseCounter = () => {
    if(count != 0){
         setCount(count-1);   
    }
}

useEffect(()=>{
console.log(`Counter will changed Now: ${count}`);
// console.log("Counter will changed Now:",count);
},[count])

return (<>
         <h5>Counter Is Now:{count}</h5>
         <br/>
         <button type="button" onClick={IncreaseCounter}>Increase Counter</button>
         <br/>
         <button type="button" onClick={DecreaseCounter}>Decrease Counter</button>
        </>);


}

export default UseEffectHooks;