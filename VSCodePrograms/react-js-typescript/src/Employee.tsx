import React from 'react';
interface MyStates {
    id:number;
    name:string;
    age?:number;            //optional property 
}
interface MyProps {
    msg:string;
    id:number;
}
class Employee extends React.Component<MyProps,MyStates>{
        constructor(props:MyProps){
            super(props);
            this.state = {id:100,name:"Ravi"}
        }
        render() {

            return(
                <div>
                    <h2>This is REact JS with Typescript</h2>
                    Id is {this.state.id}, Name is {this.state.name}
                    <br/>
                    {this.props.msg}, Id as props {this.props.id}
                </div>
            )
        }
}


export default Employee;