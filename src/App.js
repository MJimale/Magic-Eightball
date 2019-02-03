import React, { Component } from 'react';
import Answer from "./Components/Answer/Answer.js";
import Name from "./Components/Name/Name.js";
import Question from "./Components/Question/Question.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_given: false,
      question_asked: false,
      name: "",
      question: "Whats the weather"
    };
    this.addName = this.addName.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.reset = this.reset.bind(this);
  }

  addName(event) {
    event.preventDefault(); //Prevents the default action of Submit button of refreshong page

    this.setState(
      {
        name: event.target.name.value,
        name_given: true
      },
      () => {
        console.log("Action happened");
        console.log(this.state);
      }
    );
  }

  addQuestion(event) {
    event.preventDefault(); //Prevents the default action of Submit button of refreshong page
    this.setState({
      question: event.target.question.value,
      question_asked: true
    });
  }

  reset(event) {
    event.preventDefault(); //Prevents the default action of Submit button of refreshong page
    this.setState({
      question_asked: false
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to EightBall</h1>
        <div>
          {!this.state.name_given ? (
            <Name name={this.state.name} addingName={this.addName} />
          ) : (
            <div />
          )}
          {this.state.name_given && !this.state.question_asked ? (
            <Question
              name={this.state.name}
              addingQuestion={this.addQuestion}
            />
          ) : (
            <div />
          )}
          {this.state.name_given && this.state.question_asked ? (
            <Answer question={this.state.question} reset={this.reset} />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default App;
