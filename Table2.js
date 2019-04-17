import React, { Component } from 'react';
//import TableHeader from'./tableheader'; // Single component
//import TableBody from './tablebody'; // Single component
class Table extends Component {
  constructor(props)
    {
      super(props);
    }

    render() {
      const {characterData,removeCharacter} = this.props;
      return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>remove</th>
          </tr>

        </thead>
        <tbody>
          {
            characterData.length > 0 ? 
            characterData.map((val, index )=> (
              <tr key={index}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>
                
              <button onClick={() =>removeCharacter(index) }>Delete</button>
              </td>
              </tr>
            ))
            : null
          }
     
          
  
        </tbody>
      </table>
      
      )
}

  }
export default Table; 