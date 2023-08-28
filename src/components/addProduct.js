import React from "react";

class AddProduct extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
				title: '',
				category: '',
				price: '',
				description: '',
				active: false
		}
	}
	render () {
		return (
				<form>
					<input placeholder="title" onChange={(e) => this.setState({title: e.target.value})}/>
					<input placeholder="category" onChange={(e) => this.setState({category: e.target.value})}/>
					<input placeholder="price" onChange={(e) => this.setState({price: e.target.value})}/>
					<textarea placeholder="description" onChange={(e) => this.setState({description: e.target.value})}></textarea>
					<label htmlFor="active">Active</label> 
					<input  type="checkbox" id="active" onChange={(e) => this.setState({active: e.target.checked})}/>
					<button type="button" onClick={()=> this.props.onAdd({
						title: this.state.title,
						category: this.state.category,
						price: this.state.price,
						description: this.state.description,
						active: this.state.active
					})}>Add Product</button>
				</form>
		)
	}
}

export default AddProduct