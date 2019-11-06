import React, {Component} from 'react'

class Clicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
        };
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }

    getRandomNumber() {
        this.setState({number: Math.floor(Math.random() * Math.floor(10))});
    }

    render() {
        return(
            <div className="Clicker">
                <h3>Number is {this.state.number}</h3>
                {this.state.number === 7 
                    ? <h5>You Won!</h5>
                    : <button onClick={this.getRandomNumber} type="button">Random Number</button>
                }
            </div>
        )
    }
}

export default Clicker;
