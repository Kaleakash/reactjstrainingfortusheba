import React from 'react';
class Employee extends React.Component {
    constructor(props){
        super(props);
        this.state = {id:100,name:"Ravi",salary:12000};
    }

    render() {
        return(
            <div>
        <h2>Employee Details are </h2>
        Id is {this.props.id}, Name is {this.props.name} and salary is {this.props.salary}
        Age is {this.props.age}
            </div>
        )
    }
}

export default Employee;