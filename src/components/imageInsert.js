import React from "react";

class setImage extends React.Component {
  render() {
    return(
      <img className="logo" src={this.props.path} alt="logo"/>
    )
  }
}
 export default setImage