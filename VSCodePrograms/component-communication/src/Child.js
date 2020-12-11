import React from 'react';
class Child extends React.Component {

constructor(props){
    super(props);
    this.state = {cname:"Raju"}
    this.props.passValueToParent(this.state.cname);       // we have take the help of props with callback function 
}

    render(){


        return(
            <div>
                <h1>Child Component</h1>
                Child Name is <b>{this.state.cname}</b><br/>
                Parent Name access in Child component is <b>{this.props.name}</b>
            </div>
        )
    }
}

export default Child;