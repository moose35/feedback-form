import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

  handleSubmit = (event) => {
    console.log('Submit clicked');
    event.preventDefault();
    this.props.history.push("/success");
  }

  render() {
    return (
      <div >
        <h1>Review this Feedback</h1>
        <form onSubmit={this.handleSubmit}>
          Feelings: {this.props.feelingsReducer.feeling}
          <br />Understanding: {this.props.fullReducer.understanding}
          <br />Support:
       <br />Comments:
       <button>Submit</button>
        </form>
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(Review);
