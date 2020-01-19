import React, { Component } from "react";

export class PadBank extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.keyCode === this.props.keycode) {
      this.audio.play();
      this.props.setDisplay(this.props.id);
    }
  }

  handleClick = () => {
    this.audio.play();
    this.props.setDisplay(this.props.id);
  };

  render() {
    return (
        <div id={this.props.id} className="drum-pad" onClick={this.handleClick}>
          <audio
            ref={ref => (this.audio = ref)}
            id={this.props.letter}
            className="clip"
            src={this.props.url}
          ></audio>
          <p>{this.props.letter}</p>
        </div>
    );
  }
}

export default PadBank;
