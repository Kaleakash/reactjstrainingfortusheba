import React from 'react';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {user:"",pass:""}
    }
    checkUser=(event)=> {
        event.preventDefault();
        if(this.state.user=="Ajay" && this.state.pass=="Kumar"){
            console.log("Successfully Login")
            this.props.history.push("/home");
        }else {
            console.log("Failure try once again")
        }
    }
    changeValue=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return(
            <div>
                <h2>Login Page</h2>
                <form onSubmit={this.checkUser}>
                <label>UserName</label>
                <input type="text" name="user" onChange={this.changeValue}/><br/>
                <label>Password</label>
                <input type="password" name="pass" onChange={this.changeValue}/><br/>
                <input type="submit" value="submit"/>
                </form>
            </div>
        )

    }
}

export default Login;