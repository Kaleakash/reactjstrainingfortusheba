import logo from './logo.svg';
import './App.css';
import EventComponent from './EventComponent';
import Login from './Login';
import LoginPageRef from './LoginPageRef';
import LoginPageRefAlt from './LoginPageRefAlt';

function App() {
  return (
    <div className="App">
      {/*
     <EventComponent></EventComponent>
      */}
      <Login></Login>
      <LoginPageRef></LoginPageRef>
      <LoginPageRefAlt></LoginPageRefAlt>
    </div>
  );
}

export default App;
