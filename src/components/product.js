import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
	product = this.props.product
	render () {
    return (
			<div className="cart" >
				< IoCloseCircleSharp className="icon delete"/>
				< IoHammerSharp className="icon edit" />
				<h3>Title: {this.product.title}</h3>
				<h4>Category: {this.product.category}</h4>
				<h4>Price: {this.product.price}</h4>
				<p>{this.product.description}</p>
				<p>{(this.product.active)? "You can bye it" : "You can't buy it"}</p>
			</div>
		)
	}
}
export default User