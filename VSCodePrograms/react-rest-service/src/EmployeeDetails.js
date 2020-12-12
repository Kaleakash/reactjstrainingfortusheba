import React from 'react';
import axios from 'axios';
class EmployeeDetails extends React.Component {
        constructor(props){
            super(props);
            this.state = {empData:[],id:0,name:"",salary:0}
        }
        loadData = ()=> {
            axios.get("http://localhost:9999/empDetails").
            then(result=>this.setState({empData:result.data})).
            catch(error=>console.log("Error generate"+error))
        }
        changeValue=(event)=> {
            //console.log(event.target.name+" "+event.target.value)
            this.setState({[event.target.name]:event.target.value});
            //console.log(this.state)
        }
        storeRecord=(event)=> {
            event.preventDefault();
           // console.log(this.state);
           axios.post("http://localhost:9999/storeEmployees",this.state).
           then(result=>console.log(result)).catch(error=>console.log(error));
        }
        render() {
            let empRec = this.state.empData.map(e=><ul><li>{e.id}</li><li>{e.name}</li><li>{e.salary}</li></ul>)
            return(<div>
                 <form onSubmit={this.storeRecord}>
                <label>Id</label>
                <input type="text" name="id" onChange={this.changeValue}/><br/>
                <label>Name</label>
                <input type="text" name="name" onChange={this.changeValue}/><br/>
                <label>Salary</label>
                <input type="text" name="salary" onChange={this.changeValue}/><br/>
                <input type="submit" value="submit"/>
                 </form>   
                 <br/>
                <input type="button" value="Load Data" onClick={this.loadData}/>
                <br/>
                {empRec}
            </div>)
        }
}

export default EmployeeDetails;