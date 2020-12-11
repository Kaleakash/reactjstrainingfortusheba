import React, { createRef, useRef } from 'react';
class LoginPageRefAlt extends React.Component{
        constructor(props){
            super(props);
            this.state = {msg:""}
        }
        textRef = createRef(); //createRef on class component level, useRef on Function component level
        passRef = createRef();
        
        checkUser=(event)=> {
            event.preventDefault();
            // console.log(this.textRef.current.value+" "+this.passRef.current.value)
            let user = this.textRef.current.value;
            let pass = this.passRef.current.value;
            if(user=="Ravi" && pass=="123"){
                    this.setState({msg:"Successfully Login"})
            }else {
                this.setState({msg:"Failure try once again"}) 
            }
        }
        render() {
            return(
                <div>
                <h2>Login Page - createRef() function</h2>
                <form onSubmit={this.checkUser}>
                 <label>UserName</label>
                 <input type="text" name="user" ref={this.textRef}/><br/>
                 <label>Password</label>
                 <input type="password" name="pass" ref={this.passRef}/><br/>
                 <input type="submit" value="Check User"/>   
                </form>
                {this.state.msg}
                </div>
            )
        }
}
export default LoginPageRefAlt;