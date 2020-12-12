import React from 'react';
import {connect} from 'react-redux'
import Decrement from './Decrement';
import Increment from './Increment';
class App extends React.Component {
  constructor(props){
    super(props);   
  }
  
  render() {
    return(
    <div>
      <h2>update Salary with Redux</h2>
      <p>Id is {this.props.id}, Name is {this.props.name}, salary is {this.props.salary}</p>
      <input type="button" value="increment" onClick={this.props.increment}/>
      <input type="button" value="decrement" onClick={this.props.decrement}/>
      <hr/>
      <Increment></Increment>
      <Decrement></Decrement>
    </div>)
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    increment:()=>dispatch({type:"INCREMENT_SALARY"}),
    decrement:()=>dispatch({type:"DECREMENT_SALARY"})
  }
}

const mapStateToProps =(state)=> {
  return {
    id:state.id,
    name:state.name,
    salary:state.salary
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
