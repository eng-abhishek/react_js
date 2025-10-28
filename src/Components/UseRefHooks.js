import React ,{useRef,useEffect,useState} from 'react';

function UseRefHooks(){

const[inputval1,setInputval1]= useState("")
const[inputval2,setInputval2]= useState("")

const count = useRef(0);

useEffect(()=>{
    count.current = count.current+1
})

// Means In whole page if any activity preform then increse the counter by one
return(<>
<div>

    <input type='text' placeholder='enter text here' value={inputval1} onChange={(e)=>setInputval1(e.target.value)}></input>
    <br/><br/>
    <input type='text' placeholder='enter other text here' value={inputval2} onChange={(e)=>setInputval2(e.target.value)}></input>

    <h6>Word Count {count.current}</h6>
    <h6>Value of 1st Input {inputval1}</h6>
    <h6>Value of 2nd Input {inputval2}</h6>
</div>
</>);

}

export default UseRefHooks;

