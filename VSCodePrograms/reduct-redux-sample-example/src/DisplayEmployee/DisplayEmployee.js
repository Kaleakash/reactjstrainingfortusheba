import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class DisplayEmployee extends Component {
    constructor(props){
        super(props);
        this.state = {id:0,name:"",salary:0.0}
    }
    
    deleteRec=(id)=>event=>{
     this.props.delete(id);
    }

    updateValue=(id,name,salary)=>event=> {
        //console.log(id+"-"+name+"-"+salary);
        this.setState({id,name,salary});
        //console.log(this.state);
    }
    changeValue=(event)=> {
        this.setState({[event.target.name]:event.target.value});
        
    }
    updateRec=(event)=> {
        event.preventDefault();
        this.props.update(this.state);
    }
    render(){
       let EmpRow = this.props.emp.map(e=><tr key={e.id}><td>{e.id}</td>
       <td>{e.name}</td>
       <td>{e.salary}</td>
       <td><input type="button" value="Delete Rec" 
       onClick={this.deleteRec(e.id)}></input></td>
       <td><input type="button" value="Update Rec" 
       onClick={this.updateValue(e.id,e.name,e.salary)}>
        </input></td>
       </tr>
       );
        return(
            <div className="DisplayEmployee">
                <h2>Display Employee Details</h2>
                <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Delete Rec</th>
                        <th>Update Rec</th>
                    </tr>
                </thead>
                <tbody>
                    {EmpRow}
                </tbody>
                </table>
                <br/>
                <form onSubmit={this.updateRec}>
                    <label>Id</label>
            <input type="text" name="id" value={this.state.id} readOnly/>
                    <br/>
                    <label>Name</label>
            <input type="text" name="name" value={this.state.name}
                    onChange={this.changeValue}/>
                    <br/>
            <label>Salary</label>
                    <input type="text" name="salary" value={this.state.salary}
                    onChange={this.changeValue}/>
                    <br/>                 
        <input type="submit" value="Update Rec"></input> 
                </form>
            </div>
        );
    }
}

DisplayEmployee.propTypes = {
};

DisplayEmployee.defaultProps = {
};

const mapStateToProps = (state)=> {
    return {
        emp:state
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        "delete":(empId)=> dispatch({type:"DELETE_EMPLOYEE",id:empId}),
        "update":(emp)=>dispatch({type:"UPDATE_EMPLOYEE",payload:emp})

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(DisplayEmployee);
