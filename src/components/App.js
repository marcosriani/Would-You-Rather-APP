import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authenticate from './Authenticate';
import NewPoll from './NewPoll';
import PollsDashboard from './PollsDashboard';
import Poll from './Poll.js';
import PollResult from './PollResult.js';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import { handleInitialData } from '../actions/questions';

// CSS
import './Reset.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
    // Todo: check if the code bellow should stay where it
    this.props.handleInitialData();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
        </div>
        <div>
          <Route path='/' exact component={Authenticate} />
          <Route path='/home' component={PollsDashboard} />
          <Route path='/poll/:id' component={Poll} />{' '}
          <Route path='/pollResult/:id' component={PollResult} />
          <Route path='/newPoll' component={NewPoll} />
          <Route path='/leaderboard' component={Leaderboard} />
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = () => {

// }

export default connect(null, {
  getUsers,
  handleInitialData,
})(App);
