import React, { Component } from 'react';
import axios from 'axios';

class Understanding extends Component {
  render() {
    return (
      <div >
        <h1>How well are you understanding the content?</h1>
        Understanding?
       <form onSubmit={this.handleUnderstanding}>
          <select name="feelings">
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
      </div >
    );
  }
}

export default Understanding;
