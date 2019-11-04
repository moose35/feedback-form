import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: '',
  }

  handleChangeForSupport = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  }

  handleSupportButton = (event) => {
    event.preventDefault();
    console.log('Support clicked');
    if(this.state.support === '') {
      alert('Please select a number 1-5')
    } else {
    this.props.dispatch({ type: 'GET_SUPPORT', payload: this.state.support });
    this.props.history.push("/comments");
    }
  }

  render() {
    return (
      <div >
        <h1>How well are you being supported?</h1>
        Support?
       <form onSubmit={this.handleSupportButton}>
          <select name="support" onChange={this.handleChangeForSupport('support')}>>
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
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(Support);
