import React from 'react';
class Employee extends React.Component {
    constructor(props){
        super(props);
        this.state = {user:"Dinesh"}
        console.log("Constructor called....")
    }
    componentWillMount() {
        console.log("will mount");
    }
    componentDidMount() {
        console.log("did mount");
    }
    componentWillUpdate() {
       console.log("will update - Before state change - Again"); 
    }
    componentDidUpdate() {
        console.log("did update - After state change - Again ");
    }
    componentWillUnmount() {
        console.log("component will unmount");      //clean resource 
    }
    render() {
        console.log("Render function");

        return(
            <div>
                <h2>Employee component life cycle</h2>
                Name is {this.state.user}<br/>
                <input type="button" value="Change Name"
                onClick={()=>this.setState({"user":"Dinesh Kumar"})}/>
            </div>
        )
    }
}


export default Employee;