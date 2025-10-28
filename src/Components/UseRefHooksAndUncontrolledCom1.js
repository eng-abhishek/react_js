import React,{useEffect,useRef} from "react";

function UseRefHooksAndUncontrolledCom1(){

  const myRef = useRef();

useEffect(()=>{
    console.log(myRef.current.innerHTML);
})

const ClickHandler = () => {
    myRef.current.style.color='red';
} 

  return(<>
  <h6 ref={myRef}> Hello Team</h6>
  <button type="button" onClick={ClickHandler}>Click Here For Change</button>
  </>);
}

export default UseRefHooksAndUncontrolledCom1;