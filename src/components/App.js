import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authenticate from './Authenticate';
import NewPoll from './NewPoll';
import PollsDashboard from './PollsDashboard';
import Nav from './Nav';
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
          <Route path='/newPoll' component={NewPoll} />
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
