import React, { Component } from "react";
import "./Hangman.css";

class GuessHutton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleGuess(this.props.ltr);
    }

    render() {
        return (
            <button
                key={this.props.ltr}
                value={this.props.ltr}
                onClick={this.handleClick}
                disabled={this.props.disabled}
            >
                {this.props.ltr}
            </button>
        );
    }
}

export default GuessHutton;
