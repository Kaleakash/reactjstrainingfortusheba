import Employee from './Employee';

function App(props) {
  return (
    <div>
      <h1>This is App componnet</h1>
      {props.msg}
      <hr/>
      <Employee id="100" name="Ravi" salary = "12000" age="21"></Employee>
      <Employee id="101" name="Ramesh" salary = "15000" age="25"></Employee>
      <hr/>
    </div>
  );
}

export default App;
