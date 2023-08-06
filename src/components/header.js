import React from "react";
import Button from "./button"

class Header  extends React.Component {
  render () {
    return (
      <header className="header">
        Some Header
        <div>
          <Button/>
          <Button text="my button"/>
        </div>
      </header>
    )
  }
}
export default Header