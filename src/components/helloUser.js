import React from "react";

class HelloUser extends React.Component {
  constructor (props) {
    super (props) 
    this.state = {
      name: 'User'
    }
  }
  nameEnter = () => {
    let userName = prompt("Enter Your Name")
    this.setState({
      name: userName
    })
  }
  render () {
    return (
      <div className="user">
        <button onClick={this.nameEnter}>Enter Name</button>
        <p>Hello {this.state.name}</p>
      </div>
    )
  }
}
export default HelloUser