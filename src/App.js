import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSideBar: false
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.show()}>Create!</button>
          <h2>Re-Create: Drag and Drop Components!</h2>
          {this.state.showSideBar ? <SideBar /> : null}
        </div>
      </div>
    );
  }
  show = () => {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }
}

export default App;
