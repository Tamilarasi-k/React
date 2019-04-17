
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table2' // class component
//import TableHeader from'./TableHeader'; // Single component
//import TableBody from './Tablebody'; // Single component


class App extends Component {
  constructor(props)
  {
    super(props);

    this.state= {
      characters:[
       {name: "Tamil", age: "22"},
       {name: "Abi", age: "28"},
       {name: "Akil", age: "20"}
    ]}
  
  this.removeCharacter = index =>{
    const{characters} = this.state
    this.setState({
      characters:this.state.characters.filter((character ,i)=>{
        return i !== index
      })
    })
  }
}
  render() {
    return (
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter ={this.removeCharacter}/>
      </div>
    )
}

}

export default App;
