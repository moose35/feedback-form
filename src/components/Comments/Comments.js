import React, { Component } from 'react';


class Comments extends Component {
  handleComment = (event) =>{
    event.preventDefault();
    console.log('Comment clicked');
    this.props.history.push("/review");
}
  render() {
    return (
      <div >
       <h1>Any comments you want to leave?</h1>
       Support?
       <form onSubmit={this.handleComment}>
          <input />
          <br /><br />
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default Comments;
