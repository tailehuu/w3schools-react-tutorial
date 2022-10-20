import React from "react"

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      model: "Mustang",
      color: "red",
      year: 1964
    }
  }

  changeColor = () => {
    this.setState({ color: "blue" })
  }

  render() {
    return (
      <div>
        <h1>Car</h1>
        <h2>My {this.props.brand}</h2>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}

export default Car