import React from 'react';

class FakeService extends React.Component {
    constructor(props){
        super(props);
        this.state = {fakeData:[]}
    }

    loadData=()=> {
        fetch("https://jsonplaceholder.typicode.com/todos").
        then(result=>{
            let abc = result.json();        //converting stream to json 
            abc.then(result1=>this.setState({fakeData:result1}));
        }).
        catch(error=>console.log(error));
    }
    render() {
let records = this.state.fakeData.map(rec=><tr key={rec.id}><td>{rec.id}</td><td>{rec.title}</td></tr>)
        return(<div>
            <h2>Load Fake JSON Data</h2>
            <input type="button" value="Load Fake Data"
            onClick={this.loadData}/>
            <br/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {records}
                </tbody>
            </table>
        </div>)
    }
}


export default FakeService;