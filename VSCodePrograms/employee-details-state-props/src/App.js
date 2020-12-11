import Employee from './Employee';
import Person,{PersonDetails} from './PersonInfo';
function App(props) {
  let PersonRec = PersonDetails.map(e=><ul><li>{e.pid}</li><li>{e.pname}</li><li>{e.age}</li></ul>)
  
  return (
    <div>
      {/*
      <h1>This is App componnet</h1>
      {props.msg}
      <hr/>
      <Employee id="100" name="Ravi" salary = "12000" age="21"></Employee>
      <Employee id="101" name="Ramesh" salary = "15000" age="25"></Employee>
      <hr/>
      */}
      {
        PersonDetails.map(p=>{
          return <Person pid={p.pid} pname={p.pname} age={p.age}></Person>
        })
      }
      <hr/>
      {PersonRec}
    </div>
  );
}

export default App;
