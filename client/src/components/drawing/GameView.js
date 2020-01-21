import React, { Component } from "react";
import CanvasContainer from "./CanvasContainer.js";
import WordBank from "../WordBank.js";
import TextInput from "./TextInput.js";

class GameView extends Component {
  render() {
    return (
      <div className="game">
        <div className="gamealign">
          <p className="wordbutton">
            <WordBank />
          </p>
        </div>
        <div className="alignment">
          <div className="paper">
            <CanvasContainer />
          </div>
          <div className="paper2">
            <TextInput />
          </div>
        </div>
      </div>
    );
  }
}

export default GameView;
