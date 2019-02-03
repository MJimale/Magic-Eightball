import React from "react";

function Question(props) {
  return (
    <div>
      <form onSubmit={props.addingQuestion}>
        <h4>
          Now {props.name}, ask away.
          <br />
          Whats your question?
        </h4>
        <input type="text" id="question" />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
}

export default Question;
