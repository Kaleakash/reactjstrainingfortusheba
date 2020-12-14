import React from 'react';
class EmployeeDetails extends React.Component {

        constructor(props){
            super(props);
            this.state = {id:100,name:"Ravi ",salary:14000}
        }

        render() {

            return(
            <div>
                    <h2>Employee Details </h2>
                    Id {this.state.id}, name is {this.state.name}, salary is {this.state.salary}
            </div>)
        }
}
export default EmployeeDetails;