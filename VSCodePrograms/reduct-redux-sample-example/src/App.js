import React, { Fragment } from 'react';
import './App.css';
import DisplayEmployee from './DisplayEmployee/DisplayEmployee';
import AddEmployee from './AddEmployee/AddEmployee';
class App extends React.Component {
 
  render() {
    return(
    <Fragment>
      <h1>React with Redux Employee Details</h1>
      <AddEmployee></AddEmployee>
      <br/>
      <DisplayEmployee></DisplayEmployee>
    </Fragment>
    )
  }
}

export default App;
