import React from "react";

class Products  extends React.Component {
  products = [
    {
      id: 1,
      title: "dress",
      category: "cloth",
      price: "124",
      actual: true,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem ipsum "
    },
    {
      id: 2,
      title: "boots",
      category: "shoes",
      price: "250",
      actual: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem ipsum "
    }
  ]
  render () {
    if (this.products.length > 0) {
      return (
        <div className="cart-container">
          {this.products.map((product) => (<div className="cart" key={product.id}>
            <h3>Title: {product.title}</h3>
            <h4>Category: {product.category}</h4>
            <h4>Price: {product.price}</h4>
            <p>{product.description}</p>
            <p>{(product.actual)? "You can bye it" : "Yuo can't buy it"}</p>
          </div>))}
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