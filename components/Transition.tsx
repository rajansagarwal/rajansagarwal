import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = [
  "a writer.",
	"rajan.",
  "a developer.",
	"an author.",
	"a hacker.",
	"curious.",
];

class Transition extends Component {
  state = {
    textIndex: 1,
    textFastIndex: 1,
    paragraphIndex: 1,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        textIndex: this.state.textIndex + 13,
        paragraphIndex: this.state.paragraphIndex + 1,
      });
    }, 3700);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 150);
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <section className="inline">
					i&#39;m
            <ReactTextTransition
              className="transition"
              text={texts[this.state.textIndex % texts.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 5px" }}
              inline
            />
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Transition;