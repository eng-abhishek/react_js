import React,{useEffect,useRef} from "react";

function UseRefHooksAndUncontrolledCom2(){
  
  const fnameRef = useRef();
  const lnameRef = useRef();

const SubmitHandler = (e) => {
   e.preventDefault();
   console.log(`Your full name is = ${fnameRef.current.value} ${lnameRef.current.value}`);
}

useEffect(()=>{
    fnameRef.current.focus();
    fnameRef.current.style.color="red";
    console.log(fnameRef);
    console.log(lnameRef);
})

return (<>
<form onSubmit={SubmitHandler}>

<label>First Name</label>:
<input type="text" placeholder="First Name" ref={fnameRef}></input>
<br/><br/>

<label>Last Name</label>:
<input type="text" placeholder="Last Name" ref={lnameRef}></input>
<br/><br/>
<button type="submit">Submit</button>
</form>
</>)

}

export default UseRefHooksAndUncontrolledCom2;
