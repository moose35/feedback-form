import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.getReview();
  }

  getReview = () => {
    //get route to get information from database
    axios.get('/api/full-review')
      .then((response) => {
        this.props.dispatch({type: 'FULL_REVIEW', payload: response.data});
      }).catch((error) => {
        console.log('Error on GET route:', error);
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route exact path="/" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/success" component={Success} />
          <ul>
            <li>
              <Link to="/">Feeling</Link>
            </li>
            <li>
              <Link to="/understanding">Understanding</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
            <li>
              <Link to="/success">Success</Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
