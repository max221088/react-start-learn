import React from "react"
import * as ReactDOMClient from 'react-dom/client';

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text"
const container = "Text 1"
const container2 = "Text 2"

const elements = (<div className="name">
  <h1>{helpText}</h1>
  <input placeholder={helpText}
    onClick={inputClick} onMouseEnter={mouseOver} />
  <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
</div>)
const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(elements)

const containerHtml = ReactDOMClient.createRoot(document.getElementById("container"))
const containerHtml2 = ReactDOMClient.createRoot(document.getElementById("container-2"))

containerHtml.render(<p>{container}</p>)
containerHtml2.render(<div>
  <p>{container}</p>
  <p>{container2}</p>
</div>)