import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useContext,useRef } from 'react';

let Employee = (props)=> {
  let [id,changeId]=useState(100);
  let nameRef = useRef();   //createRef in Class component 
  useEffect(()=> {
    console.log("Event generated....");
  })
  let getDetails=function() {
    console.log("Event Generated...")
    console.log(nameRef.current.value)
  }
  return(<div>
         <h2>Employee componet as functional style</h2> 
         Id is {id}<br/>
         <input type="button" value="Change Id"
         onClick={()=>changeId(200)}/>
         <br/>
         <input type="text" ref={nameRef}/>
         <input type="button" value="Get Value"
         onClick={getDetails}/>
        </div>)
}
function App() {
  return (
    <div className="App">
     <Employee></Employee> 
    </div>
  );
}

export default App;
