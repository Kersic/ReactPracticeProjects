import React, {Component} from 'react'
import head from './images/head.jpg'
import tail from './images/tail.jpg'
import './Coin.css'

class Coin extends Component{
    static defaultProps = {
        isHead: true
    };
    render() {
        return(
            <div className="Coin">
                {this.props.isHead ?
                    <img alt="head" src={head}/> :
                    <img alt="tail" src={tail}/>
                }
            </div>
        )
    }
}

export default Coin;
