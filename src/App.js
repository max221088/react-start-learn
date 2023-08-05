import React from "react"
import Quote from './components/quote'
import PropsQuote from "./components/propsQuote"
import ImgInsert from "./components/imageInsert"
import pic from "./img/pic.png"
import Header from "./components/header"

class app extends React.Component {
  helpText = "Help text"
  render () {
    return (
      <div>
        <Header/>
        <div className="name">
          <h1>{this.helpText}</h1>
          <input placeholder={this.helpText}
          onClick={this.inputClick} onMouseEnter={this.mouseOver} />
          <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
        </div>
        <Quote/>
        <PropsQuote quot="This is Props Data"/>
        <ImgInsert path={pic}/>
        <img className="logo" src={pic} alt="logo"/>
      </div>
    )
  }
  inputClick () {console.log("Clicked")}
  mouseOver () {console.log("Mouse Over")}
}
export default app