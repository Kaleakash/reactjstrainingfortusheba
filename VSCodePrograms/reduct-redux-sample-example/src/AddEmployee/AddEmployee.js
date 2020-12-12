import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.state = {id:0,name:"",salary:0.0}
      }
      changeValue=(event)=> {
        this.setState({[event.target.name]:event.target.value});
      }
      storeEmpInfo=(event)=> {
          event.preventDefault();
          this.props.add(this.state);   // pass to store 
          this.setState({id:0,name:"",salary:0.0})
      }
    render(){
        return(
            <div>
            <h2>Add Employee Details</h2>
            <form onSubmit={this.storeEmpInfo}>
            <label>Employee Id</label>
            <input type="text" name="id" onChange={this.changeValue} value={this.state.id}/>
            <br/>
            <label>Employee Name</label>
            <input type="text" name="name" onChange={this.changeValue} value={this.state.name}/>
            <br/>
            <label>Employee Salary</label>
            <input type="text" name="salary" onChange={this.changeValue} value={this.state.salary}/>
            <br/>
            <input type="submit" value="Store Rec"></input>
            </form>
            </div>
        );
    }
}

AddEmployee.propTypes = {
};

AddEmployee.defaultProps = {
};

const mapStateToProps = (state)=> {
    return {
        emp:state
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        "add":(emp)=> dispatch({type:"ADD_EMPLOYEE",payload:emp})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddEmployee);
