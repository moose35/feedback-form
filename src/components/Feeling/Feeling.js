import React, { Component } from 'react';
import axios from 'axios';

class Feeling extends Component {
  render() {
    return (
      <div>
       <h1>How are you feeling today?</h1>
       <form action="/understanding">
  <select name="feelings">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  <br /><br />
  <input type="submit" />
</form>
      </div>
    );
  }
}

export default Feeling;
