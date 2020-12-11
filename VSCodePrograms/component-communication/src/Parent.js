import React from 'react';
import Child from './Child';
class Parent extends React.Component {
        constructor(props){
            super(props);
            this.state = {pname:"Ajay",cname:""}
        }
        recieveChildValue=(data)=>{
            //console.log(data)
            this.setState({cname:data});
        }
    render(){


        return(
            <div>
                <h1>Parent Component</h1>
                Parent Name is <b>{this.state.pname}</b>
                Child name is <b>{this.state.cname}</b>
                <hr/>
        <Child name={this.state.pname} passValueToParent={this.recieveChildValue}></Child>
        <Child name={this.state.pname} passValueToParent={this.recieveChildValue}></Child>
                <hr/>
                Parent Component Area..
            </div>
        )
    }
}

export default Parent;