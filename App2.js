
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table' // class component
import Form from'./form'


class App extends Component {
  constructor(props)
  {
    super(props);
    
    this.state= {
      characters:[
      // {name: "Tamil", age: "22"},
      // {name: "Abi", age: "28"},
     //{name: "Akil", age: "20"}
    ]
  }
  
  this.removeCharacter = index =>{
    const{characters} = this.state
    this.setState({
      characters:this.state.characters.filter((character ,i)=>{
        return i !== index
      })
    })
  }
this.handleSubmit = character =>{
  character.age = character.age*2; 
  this.setState({characters:[...this.state.characters,character]})
}



}
  render() {
    return (
   
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter ={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
}

}

export default App;

