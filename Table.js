import React, { Component } from 'react';
class Table extends Component {

    constructor(props)
    {
      super(props);
    }

    render() {
      const {data} = this.props;
      return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {
            data.length > 0 ? 
            data.map((val, index )=> (
              <tr key={index}>
              <td>{val.name}</td>
              <td>{val.age}</td>
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