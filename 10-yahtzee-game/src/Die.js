import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    wordNums:['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.idx);
  }
  render() {
    let classes = `Die fas fa-dice-${this.props.wordNums[this.props.val -1]} fa-5x`;
    return (
      <i
        className={classes}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Die;
