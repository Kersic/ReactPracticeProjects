import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
      let disabled = this.props.score !== undefined;
    return (
      <tr className={!disabled ? "RuleRow RuleRow-active" : "RuleRow RuleRow-disabled"} onClick={!disabled ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{!disabled ? this.props.description : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;
