import React from "react"

class quote extends React.Component {
  quot = "Lorem ipsum dolor sit amet."
  render () {
    const quot = "context Our"
    return (
      <div>
        <blockquote><p>{this.quot}</p></blockquote>
        <blockquote><p>{quot}</p></blockquote>
      </div>
    )
  }
}

export default quote