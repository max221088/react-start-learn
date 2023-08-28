import React from "react"
import Header from "./components/header"
import Products from "./components/products"
import AddProduct from "./components/addProduct"

class app extends React.Component {
  constructor (props) {
		super (props)
		this.state = {
			products: [
				{
					id: 1,
					title: "dress",
					category: "cloth",
					price: "124",
					active: true,
					description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem ipsum "
				},
				{
					id: 2,
					title: "boots",
					category: "shoes",
					price: "250",
					active: false,
					description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem ipsum "
				}
			]
		}
		this.addProduct = this.addProduct.bind(this)
	}

  render () {
    return (
      <div>
        <Header/>
        <main>
          <Products products={this.state.products}/>
        </main>
        <aside>
					<AddProduct onAdd={this.addProduct}/>
				</aside>
      </div>
    )
  }
	addProduct (product) {
		product.id = this.state.products.length + 1;
		this.setState({products: this.state.products.push(product)})
		console.log(this.state.products)
	}
}
export default app