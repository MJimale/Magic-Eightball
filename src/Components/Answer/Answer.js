import React from "react";
import eightBall from "./Eightball.gif";
function eightBaller() {
  var eightBall = "";
  const randomNumber = Math.floor(Math.random() * 8);
  switch (randomNumber) {
    default:
      eightBall = "Well, only the higher powers know";
      return eightBall;
      break;
    case 1:
      eightBall = "It is certain";
      return eightBall;
      break;
    case 2:
      eightBall = "It is decidedly so";
      return eightBall;
      break;
    case 3:
      eightBall = "Reply hazy try again";
      return eightBall;
      break;
    case 4:
      eightBall = "Cannot predict now";
      return eightBall;
      break;
    case 5:
      eightBall = "Do not count on it";
      return eightBall;
      break;
    case 6:
      eightBall = "My sources say no";
      return eightBall;
      break;
    case 7:
      eightBall = "Outlook not so good";
      return eightBall;
      break;
    case 8:
      eightBall = "Signs point to yes";
      return eightBall;
      break;
  }
}

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDisplay: "",
      answerDisplay: "none"
    };
    this.hider = this.hider.bind(this);
    this.timer = setTimeout(this.hider, 5000);
  }

  hider() {
    this.setState(
      {
        imageDisplay: "none",
        answerDisplay: ""
      },
      () => {
        console.log("Action happened");
      }
    );
  }

  render() {
    return (
      <div>
        <div style={{ display: this.state.imageDisplay }}>
          <h3>Hmmmm....</h3>
          <img
            id="firstImgGif"
            src={eightBall}
            alt="loading..."
            height="200"
            width="200"
          />
        </div>
        <div style={{ display: this.state.answerDisplay }}>
          {/*  <h3>Q: {this.props.question}</h3>  */}
          <h3>{eightBaller()}</h3>
          <button onClick={this.props.reset}>Ask another question</button>
        </div>
      </div>
    );
  }
}

export default Answer;
