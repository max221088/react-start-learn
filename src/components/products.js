import React from "react";
import Product from "./product"

class Products  extends React.Component {
  render () {
    if (this.props.products.length > 0) {
      return (
        <div className="cart-container">
          {this.props.products.map((product) => (
						<Product key={product.id} product={product} 
						onEdit={this.props.onEdit}
						onDelete={this.props.onDelete}/>
					))}
        </div>
      )
    } else {
      return (
        <div className="cart-container">
          <div className="cart">
            <h3>No Products</h3>
          </div>
        </div>
      )
    }
  }
}
export default Products