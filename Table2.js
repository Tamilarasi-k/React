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
          <th>Roll_no</th>
            <th>Name</th>
            <th>Tamil</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Social</th>
            <th>remove</th>
          </tr>

        </thead>
        <tbody>
          {
            characterData.length > 0 ? 
            characterData.map((val, index )=> (
              <tr key={index}>
            <td>{val.RollNo}</td>
              <td>{val.Name}</td>
              <td>{val.Tamil}</td>
              <td>{val.English}</td>
              <td>{val.Maths}</td>
              <td>{val.Science}</td>
              <td>{val.Social }</td>
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
