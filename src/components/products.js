import React from "react";
import Product from "./product"

class Products  extends React.Component {
	products = this.props.products
  render () {
    if (this.products.length > 0) {
      return (
        <div className="cart-container">
          {this.products.map((product) => (
						<Product key={product.id} product={product }/>
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