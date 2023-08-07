import React from "react"
import Header from "./components/header"
import Products from "./components/products"

class app extends React.Component {
  
  render () {
    return (
      <div>
        <Header/>
        <main>
          <Products/>
        </main>
        <aside></aside>
      </div>
    )
  }

}
export default app