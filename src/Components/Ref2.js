import React,{Component, createRef} from 'react';

class Ref2 extends Component{

    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    // It will work at time of load the browser
    componentDidMount(){
        console.log(this.myRef.current);
        console.log(this.myRef.current.innerHTML);
    }
    
    HandleSubmit = () => {
    this.myRef.current.style.color ="red"; 
    this.myRef.current.style.fontSize ="100px";
    this.myRef.current.style.textAlign ="right";
    // console.log(this.myRef.current.innerHTML);
    }

    render(){
     return (<>
     <h1 ref={this.myRef}>Ram Ji </h1>
     <button onClick={this.HandleSubmit}>Click Here...</button>
     </>)
    }

}

export default Ref2;