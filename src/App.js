import React from "react"
import Quote from './components/quote'
import PropsQuote from "./components/propsQuote"
import ImgInsert from "./components/imageInsert"
import pic from "./img/pic.png"
import Header from "./components/header"
import Car from "./components/car"
import InterfaceUser from "./components/interface"
import HelloUser from "./components/helloUser"

class app extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      helpText: "Help text",
      userData: "some input text"
    }
    this.inputClick = this.inputClick.bind(this)
  }
  
  render () {
    return (
      <div>
        <Header/>
        <div className="name">
          <h1>{this.state.helpText}</h1>
          <h2>{this.state.userData}</h2>
          <input placeholder={this.state.helpText}
          onChange={event => this.setState({userData: event.target.value})}
          onClick={this.inputClick} onMouseEnter={this.mouseOver} />
          <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
        </div>
        <HelloUser/>
        <InterfaceUser/>
        <Quote/>
        <PropsQuote quot="This is Props Data"/>
        <ImgInsert path={pic}/>
        <img className="logo" src={pic} alt="logo"/>
        <Car name="Porche" weight="1200" speed="200" color="red"/>
        <Car name="Audi" weight="1500" speed="220" color="green"/>
        <Car name="Mazda" weight="1400" speed="240" color="blue"/>
      </div>
    )
  }

  inputClick () {
    this.setState({helpText: "chenge"})
    console.log("Clicked")
  }
  mouseOver () {console.log("Mouse Over")}
}
export default app