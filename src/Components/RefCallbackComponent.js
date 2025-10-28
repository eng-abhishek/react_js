import React,{Component} from "react";

class RefCallbackComponent extends Component{
    constructor(props){
        super(props);
        this.nameRef = null;
        this.setNameRef=(e)=>{
          this.nameRef = e;
        }
    }
    
    componentDidMount(){
        console.log(this.nameRef);
        this.nameRef.focus();
    }

    HandlerSubmit = (e) => {
      e.preventDefault();
      this.nameRef.style.color='red';
      this.nameRef.style.backgroundColor='yellow';
      console.log(this.nameRef.value);
    }

    render(){
        return(<>
        <form onSubmit={this.HandlerSubmit}>
         <label>Name:</label>:
         <input type="text" placeholder="enter name" ref={this.setNameRef}></input>
         <br/>
         <button type="submit"> Submit </button>
        </form>
        </>)
    }
}

export default RefCallbackComponent;