import React from 'react';
class EventComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"Ajay"}
        this.fun1 = this.fun1.bind(this);
        this.fun5 = this.fun5.bind(this);
    }

    fun1() {
        console.log("Event generated");
        this.setState({name:"Ajay Kumar"})
    }
    fun2 = ()=> {
        this.setState({name:"Ajay Patil"})
    }
    fun3(fname){
        //console.log(name)
        this.setState({name:fname})
    }
    fun4 =(fname)=> {
        this.setState({name:fname})
    }
    fun5(event){
        let name = event.target.name;
        let value = event.target.value;
        console.log(name+" "+value);
    }
    render() {


        return(
            <div>
                <h2>Event Example</h2>
                Name is {this.state.name}<br/>
                <input type="button" value="First Button" onClick={this.fun1}/>
                <input type="button" value="Second Button" onClick={this.fun2}/>
    <input type="button" value="Third Button" 
    onClick={()=>this.setState({name:"Ajay Vijay"})}/>
    <br/>
    <input type="button" value="Fourth Button - passing value to normal function"
    onClick={()=>this.fun3("Mahesh")}/>
<input type="button" value="Fourth Button - passing value to arrow function"
    onClick={()=>this.fun4("Mahesh Kumar")}/>
    <br/>
    <input type="button" name="b1" value="Event Ref" onClick={(event)=>this.fun5(event)}/>
            </div>
        )
    }
}

export default EventComponent;