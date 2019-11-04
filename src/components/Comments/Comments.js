import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comment: '',
  }

  handleChangeForComment = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  }

  handleCommentButton = (event) =>{
    event.preventDefault();
    console.log('Comment clicked');
    if (this.state.comment === '') {
      alert('Please leave a comment.')
    } else {
    this.props.dispatch({ type: 'GET_COMMENT', payload: this.state.comment });
    this.props.history.push("/review");
    }
}
  render() {
    return (
      <div >
       <h1>Any comments you want to leave?</h1>
       Comments
       <form onSubmit={this.handleCommentButton} onChange={this.handleChangeForComment('comment')}>
          <input placeholder="Is there anything you'd like us to know?" />
          <br /><br />
          <button>Next</button>
        </form>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(Comments);
