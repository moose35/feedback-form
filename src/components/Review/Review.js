import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit clicked')
    this.props.history.push("/success");
  }

  render() {
    return (
      <div >
        <h1>Review this Feedback</h1>
        <form onSubmit={this.handleSubmit}>
          Feelings: {this.props.feelingsReducer}
          <br />Understanding: {this.props.understandingReducer}
          <br />Support: {this.props.supportReducer}
          <br />Comments: {this.props.commentReducer}
          <br /><button>Submit</button>
        </form>
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(Review);


// axios.post('/api/full-review', this.props.feelingsReducer)
//     .then((response) => {
//       console.log(response);
//       this.props.history.push("/success");
//         this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
//     })
//     .catch((error) => {
//         console.log('error in POST', error);