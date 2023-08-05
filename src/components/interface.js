import React from "react";

class interfaceUser extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "Maxim",
      job: "Engeneer"
    };
  };
  render () {
    return (
      <div>My name is {this.state.name} and I am {this.state.job}!</div>
    )
  };
};
export default interfaceUser