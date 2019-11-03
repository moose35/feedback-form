import React, { Component } from 'react';
import axios from 'axios';

class Understanding extends Component {
  handleUnderstanding = (event) => {
    event.preventDefault();
    console.log('Understanding clicked');
    this.props.history.push("/support");
  }

  render() {
    return (
      <div >
        <h1>How well are you understanding the content?</h1>
        Understanding?
       <form onSubmit={this.handleUnderstanding}>
          <select name="understanding">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br /><br />
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default Understanding;
