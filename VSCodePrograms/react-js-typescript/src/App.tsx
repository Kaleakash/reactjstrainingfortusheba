import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
      <Employee msg="Welcome to React JS with TypeScript" id={100}></Employee>
    </div>
  );
}

export default App;
