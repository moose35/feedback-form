import React, { Component } from 'react';
import axios from 'axios';

class Feeling extends Component {

  handleFeeling = (event) => {
    event.preventDefault();
    console.log('Feelings clicked');
    // this.props.dispatch({type: 'GET_FEELINGS'});
    // this.props.history.push("/understanding");
  }

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        Feeling?
       <form onSubmit={this.handleFeeling}>
          <select name="feeling">
            <option>--</option>
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

export default Feeling;
