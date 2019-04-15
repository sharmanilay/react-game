import React, { Component } from 'react';
import "./button.css"
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.handleClick();
    if (this.props.count%2==0) {
      this.setState((state) => {
        return {text: 'O'}
     })
    } else {
      this.setState((state) => {
        return {text: 'X'}
     })
    }
    let targetButton = document.getElementById(e.target.id);
    targetButton.disabled = true;
    
  }
  componentDidUpdate() {
    if (this.props.count>=5) {
      setTimeout(this.props.calcWinner.bind(this), 500);
    }
  }
  render() {
    return (
      <button onClick = {this.handleChange} id={this.props.id}>
      {this.state.text}
      </button>
    );
  }
}

export default Button;