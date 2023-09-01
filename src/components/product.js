import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddProduct from "./addProduct";

class User extends React.Component {
	product = this.props.product
	constructor (props) {
		super (props)
		this.state = {
			isEdit: false
		}
	}
	render () {
    return (
			<div className="cart" >
				< IoCloseCircleSharp className="icon delete" onClick={() => this.props.onDelete(this.product.id)}/>
				< IoHammerSharp onClick={()=> this.setState({
					isEdit: !this.state.isEdit
				})} className="icon edit" />
				<img class="product-img" src={this.product.image} alt="Foto" ></img>
				<h3>Title: {this.product.title}</h3>
				<h4>Category: {this.product.category}</h4>
				<h4>Price: {this.product.price}</h4>
				<p>{this.product.description}</p>
				<p>{(this.product.active)? "You can bye it" : "You can't buy it"}</p>
				{this.state.isEdit && <AddProduct productId={this.product.id} onAdd={this.props.onEdit}/>}
			</div>
		)
	}
}
export default User