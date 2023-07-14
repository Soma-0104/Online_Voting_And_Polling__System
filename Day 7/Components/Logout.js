import React, { Component } from 'react'
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  }
 
  render() {
    return (
      <button style={{backgroundColor:'green'}} onClick={this.logout}>Logout</button>
    )
  }
}