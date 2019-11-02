import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Route exact path="/" component={Feeling}/>
            <Route exact path="/understanding" component={Understanding}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/comments" component={Comments}/>
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
            </ul>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
