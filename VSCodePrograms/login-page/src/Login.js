import React from 'react';
class Login extends React.Component{
        constructor(props){
            super(props);
            this.state = {user:"",pass:"",msg:""}
        }
        checkUser=(event)=> {
                event.preventDefault();
               let user = this.state.user;
               let pass = this.state.pass;
               if(user=="Ravi" && pass=="123"){
                    //console.log("Successfully Login ")
                    this.setState({msg:"Successfully Login"})
               }else {
                    //console.log("Failure try once again")
                    this.setState({msg:"Failure try once again"})
               }
        }
        changeValue=(event) => {
            //let name = event.target.name;
            //let value = event.target.value;
            //console.log(name+" "+value);
            //this.setState({[name]:value});            // using this method we can create new state. 
            this.setState({[event.target.name]:event.target.value});
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
                 <input type="submit" value="Check User"/>   
                </form>
                {this.state.msg}
                </div>
            )
        }
}
export default Login;