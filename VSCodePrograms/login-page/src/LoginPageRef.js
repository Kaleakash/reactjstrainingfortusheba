import React from 'react';
class LoginPageRef extends React.Component{
        constructor(props){
            super(props);
            this.state = {msg:""}
        }
        checkUser=(event)=> {
            event.preventDefault();
             let user = this.refs.user.value;
             let pass = this.refs.pass.value;
             if(user=="Ravi" && pass=="123")  {
                    this.setState({msg:"Successfully Login"})
             } else {
                    this.setState({msg:"Failure try once again"})
             }
        }
        render() {
            return(
                <div>
                <h2>Login Page - Using Ref</h2>
                <form onSubmit={this.checkUser}>
                 <label>UserName</label>
                 <input type="text" name="user" ref="user"/><br/>
                 <label>Password</label>
                 <input type="password" name="pass" ref="pass"/><br/>
                 <input type="submit" value="Check User"/>   
                </form>
                {this.state.msg}
                </div>
            )
        }
}
export default LoginPageRef;