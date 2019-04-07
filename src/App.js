import React, { Component } from 'react';
import './App.css';
import InvestorPage from './pages/InvestorPage';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>Challenge Eureka!</Navbar.Brand>          
        </Navbar>
        </header>
        <InvestorPage />
      </div>
    );
  }
}

export default App;
