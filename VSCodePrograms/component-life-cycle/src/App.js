import logo from './logo.svg';
import React from 'react';
import Employee from './Employee';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {flag:true}
  }
  render() {
    return (
      <div className="App">
        <input type="button" value="Destroy Employee Component"
        onClick={()=>this.setState({flag:false})}/>
       {this.state.flag && <Employee></Employee>}
      </div>
    );
  }
}
  


export default App;
