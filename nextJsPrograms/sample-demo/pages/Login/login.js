import React from 'react';
class Login extends React.Component {
    constructor(props){
        super(props);   
    }
    render() {
        return(
            <div>
                <h2>Login Page for Get Method</h2>
                <form action="/api/loginCheck">
                    <label>UserName</label>
                    <input type="text" name="name"/><br/>
                    <label>Password</label>
                    <input type="password" name="pass"/><br/>
                    <input type="submit" value="submit"/>
                </form>
                <h2>Login Page for Post Method</h2>
                <form action="/api/loginPost" method="post">
                    <label>UserName</label>
                    <input type="text" name="name"/><br/>
                    <label>Password</label>
                    <input type="password" name="pass"/><br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
export default Login;