import React, {Component} from "react";
import "./Hangman.css";
import {randomWord} from "./words";
import GuessButton from "./GuessButton";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };

    constructor(props) {
        super(props);
        this.state = {nWrong: 0, guessed: new Set(), answer: randomWord()};
        this.handleGuess = this.handleGuess.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    handleRestart() {
        this.setState({nWrong: 0, guessed: new Set(), answer: randomWord()});
    }

    guessedWord() {
        return this.state.answer
            .split("")
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
    }

    handleGuess(ltr) {
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz"
            .split("")
            .map(ltr => (
                <GuessButton
                    key={ltr}
                    ltr={ltr}
                    handleGuess={this.handleGuess}
                    disabled={this.state.guessed.has(ltr)}
                />
            ));
    }

    render() {
        let gameOver = this.state.nWrong >= this.props.maxWrong;
        let win = !this.guessedWord().includes("_");
        return (
            <div className="Hangman">
                <div className="Container">
                    <h1>Hangman</h1>
                    <img
                        alt={this.state.nWrong + "/" + this.props.maxWrong}
                        src={this.props.images[this.state.nWrong]}
                    />
                </div>
                <div className="Container">
                    <p>Number wrong: {this.state.nWrong}.</p>
                    <p className="Hangman-word">
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </p>
                    {!gameOver && !win && (
                        <p className="Hangman-btns">{this.generateButtons()}</p>
                    )}
                    {gameOver && <p>You lose!</p>}
                    {win && <p>You Win!</p>}
                    <br/>
                    <button style={{width: "70px"}} onClick={this.handleRestart}>
                        Restart
                    </button>
                </div>
            </div>
        );
    }
}

export default Hangman;
