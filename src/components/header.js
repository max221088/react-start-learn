import React from "react";

class Header  extends React.Component {
  render () {
    return (
      <header className="header">
        All Products
				<button onClick={this.props.onDeleteAll} className="btn">Delete All Product</button>
      </header>
    )
  }
}
export default Header