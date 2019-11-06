import React, {Component} from 'react'
import './CoinFlipper.css'
import Coin from './Coin'

class CoinFlipper extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentSideIsHead: false,
            numOfHeads : 0,
            numOfTails : 0
        };
        this.flip = this.flip.bind(this);
    }

    componentDidMount() {
        this.flip();
    }

    flip (){
        const newSideIsHead = Math.floor(Math.random() * 2);
        this.setState({currentSideIsHead: newSideIsHead});
        if(newSideIsHead){
            this.setState(prevState => {
                return {numOfHeads: prevState.numOfHeads + 1}
                }
            );
        }
        else {
            this.setState( prevState => {
                    return {numOfTails: prevState.numOfTails + 1}
                }
            );
        }
    }

    render() {
        return(
            <div className="CoinFlipper">
                <h2>Let's flip a coin</h2>
                <Coin isHead={this.state.currentSideIsHead}/>
                <button onClick={this.flip}>Flip</button>
                <p>Out of {this.state.numOfHeads + this.state.numOfTails} flips, there have been {this.state.numOfHeads} heads and {this.state.numOfTails} tails.</p>
            </div>
        )
    }
}

export default CoinFlipper;
