import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import Quote from './components/quote'
import './css/index.css'

// const inputClick = () => console.log("Clicked")
// const mouseOver = () => console.log("Mouse Over")

const container = "Text 1"
const container2 = "Text 2"

 const app = ReactDOMClient.createRoot(document.getElementById("app"))

 app.render(<App/> )

 const quote = ReactDOMClient.createRoot(document.getElementById("quote"))

 quote.render(<Quote/>)

const containerHtml = ReactDOMClient.createRoot(document.getElementById("container"))
const containerHtml2 = ReactDOMClient.createRoot(document.getElementById("container-2"))

containerHtml.render(<p>{container}</p>)
containerHtml2.render(<div>
  <p>{container}</p>
  <p>{container2}</p>
</div>)