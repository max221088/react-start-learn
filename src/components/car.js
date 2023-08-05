import React from "react";

class car extends React.Component {
  render () {
    return (
      <div className="cart">
        <p className="car-name">Name Car: {this.props.name}</p>
        <p className="car-properties">Speed: {this.props.speed}</p>
        <p className="car-properties">Weight: {this.props.weight}</p>
        <p className="car-properties">Color: {this.props.color}</p>
      </div>
    )
  }
}
export default car