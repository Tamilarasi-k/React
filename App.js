
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table' // class component


class App extends Component {

  constructor(props)
  {
    super(props);

    this.ArrayData = [
      {name: "Tamil", age: "22"},
      {name: "Abi", age: "28"},
      {name: "Akil", age: "20"}
    ];
  }

  render() {
    return (
      <div className="container">
        <Table data={this.ArrayData} />
      </div>
    )
  }
}

export default App;
