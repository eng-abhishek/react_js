import React,{Component,createRef } from 'react';

class RefFormComponent extends Component{
    constructor(props){
      super(props)
       this.nameRef = createRef();
       this.ageRef = createRef();
    }

    componentDidMount(){
        console.log(this.nameRef.current.value);
        console.log(this.ageRef.current.value);
        this.nameRef.current.focus();
    }

    HandleSubmitForm = (e) => {
        
        e.preventDefault();
        console.log(this.nameRef.current.value);
        console.log(this.ageRef.current.value);
    
        console.log('Hello i am form submit..');
    }

    render(){
        return <>
        <form onSubmit={this.HandleSubmitForm}>
        <label>Enter Name</label>:
        {/* <input type="text" placeholder="name" defaultValue="Rohan" ref={this.nameRef}></input> or below one remove value attr*/}
        <input type="text" placeholder="name" ref={this.nameRef}></input>
        <br/>
        <label>Enter Age</label>:
        {/* <input type="text" placeholder="age" defaultValue="29" ref={this.ageRef}></input> or folow below one remove value attr*/}
        <input type="text" placeholder="age" ref={this.ageRef}></input>
        <br/>
        <button type="submit">Click To Submit</button>
        </form>
        </>
    }
}

export default RefFormComponent;
