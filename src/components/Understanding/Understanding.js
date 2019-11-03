import React, { Component } from 'react';
import axios from 'axios';

class Understanding extends Component {
  state = {
    understanding: '',
  }
  handleChangeForUnderstanding = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  }
  handleUnderstandingButton = (event) => {
    event.preventDefault();
    console.log('Understanding clicked');
    this.props.history.push("/support");
  }

  render() {
    return (
      <div >
        <h1>How well are you understanding the content?</h1>
        Understanding?
       <form onSubmit={this.handleUnderstandingButton}>
          <select name="understanding" onChange={this.handleChangeForUnderstanding('understanding')}>
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
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default Understanding;
