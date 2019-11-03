import React, { Component } from 'react';
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
       Feelings:
       <br />Understanding:
       <br />Support:
       <br />Comments:
       <button>Submit</button>
       </form>
      </div>
    );
  }
}

export default Review;
