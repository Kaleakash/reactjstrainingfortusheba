import React from 'react';
class User extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
    //console.log(this.props)
    let MyId = this.props.match.params.id;
        return(
        <div>
            <h2>Welcome to User Component</h2>
            Your id is {MyId}
        </div>)
    }
}

export default User;