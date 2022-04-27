import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
class App extends React.Component {
  
  render() {
    // return (
    
    //   <div className="App">
    //     <div>
    //       <h1>Hello, world!</h1>
    //       <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
    //     </div>
    //     </div>
    // )

  return (
    <div className="App">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>

   
   
    
  );
    
  }
  
}

export default App;
