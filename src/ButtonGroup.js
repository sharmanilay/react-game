import React, { Component } from 'react';
import Button from './Button' 

class ButtonGroup extends Component {
	constructor(props) {
    super(props);
    this.state = {count: 1};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.count%2 == 0) {
      this.setState((state) => {
        return {count: state.count + 1}
     })
    } else {
      this.setState((state) => {
        return {count: state.count + 1}
     })
    }
  }
  render() {
    return (
    	<div>
    		<div className="ButtonGroup">
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={1} calcWinner = {this.props.calcWinner.bind(this)}/>
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={2} calcWinner = {this.props.calcWinner.bind(this)}/>
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={3} calcWinner = {this.props.calcWinner.bind(this)}/>
      		</div>
      		<div className="ButtonGroup">
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={4} calcWinner = {this.props.calcWinner.bind(this)}/>
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={5} calcWinner = {this.props.calcWinner.bind(this)}/>
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={6} calcWinner = {this.props.calcWinner.bind(this)}/>
      		</div>
      		<div className="ButtonGroup">
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={7} calcWinner = {this.props.calcWinner.bind(this)}/>
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={8} calcWinner = {this.props.calcWinner.bind(this)}/>
      			<Button handleClick={this.handleClick.bind(this)} count={this.state.count} id={9} calcWinner = {this.props.calcWinner.bind(this)}/>
      		</div>
      	</div>
    );
  }
}

export default ButtonGroup;