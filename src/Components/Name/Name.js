import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div>
        <h3>Where the magic happens!</h3>
        <form onSubmit={this.props.addingName}>
          <h4>Hi! Whats your name?</h4>
          <input type="text" id="name" />
          <input type="submit" value="Enter" />
        </form>
      </div>
    );
  }
}

export default Name;
