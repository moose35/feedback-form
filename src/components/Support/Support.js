import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  handleSupport = (event) => {
    event.preventDefault();
    console.log('Support clicked');
    this.props.history.push("/comments");
  }

  render() {
    return (
      <div >
        <h1>How well are you being supported?</h1>
        Support?
       <form onSubmit={this.handleSupport}>
          <select name="support">
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
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(Support);
