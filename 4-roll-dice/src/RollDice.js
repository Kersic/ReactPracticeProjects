import React, {Component} from 'react';
import Dice from './Dice'
import './RollDice.css'

class RollDice extends Component{
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props){
        super(props);
        this.state = {dice1: 'one', dice2: 'one', isRolling: false};
        this.roll = this.roll.bind(this);
    }
    roll() {
        const dice1Num = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
            ];
        const dice2Num = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
            ];

        this.setState({'dice1': dice1Num, 'dice2': dice2Num, isRolling: true});

        setTimeout(() => {
            this.setState({isRolling: false});
        }, 1000);
    }
    render() {
        return(
            <div className="RollDice">
                <div className="RollDiceContainer">
                    <Dice face={this.state.dice1} rolling={this.state.isRolling}/>
                    <Dice face={this.state.dice2} rolling={this.state.isRolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Roll Dice"}
                </button>
            </div>
        )
    }
}

export default RollDice;
