import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feeling: '',
  }

  handleChangeForFeeling = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  }

  handleFeelingButton = (event) => {
    event.preventDefault();
    console.log('Feelings clicked');
    if (this.state.feeling === '') {
      alert('Please select a number 1-5')
    } else {
      this.props.dispatch({ type: 'GET_FEELINGS', payload: this.state.feeling });
      this.props.history.push("/understanding");
    }
  }

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        Feeling?
       <form onSubmit={this.handleFeelingButton}>
          <select name="feeling" onChange={this.handleChangeForFeeling('feeling')}>
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
export default connect(mapReduxStateToProps)(Feeling);
