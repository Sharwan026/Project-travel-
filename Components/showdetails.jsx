import axios from "axios";
import React, { Component } from "react";
class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:5000/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1} style={{padding:"8px 100px 8px 100px"}}>
      <thead>
        <tr>
          <th>sno</th>
          <th>Name</th>
          <th>timein</th>
          <th>hrs</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.sno}>
            <td>{user.sno}</td>
            <td>{user.name}</td>
            <td>{user.timein}</td>
            <td>{user.totalhrs}</td>
            <td>{user.paymentstatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata