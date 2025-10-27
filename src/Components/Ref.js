    // User For Reference
import React,{Component} from 'react';

class Ref extends Component{
    constructor(pops){
        super(pops);
        this.myref = React.createRef();
    }

    componentDidMount(){
    this.myref.current.focus();
    }

    changeVal = () => {
     this.myref.current.value = 'New Value Ok Boss...';
     alert(this.myref.current.value);
    }


    render(){
    return <>
         <div>
            <input type='text' ref={this.myref} />
            <br/>
            <button type='button' onClick={this.changeVal}>Click Here..</button>
         </div>
        </>
    }
}

export default Ref;