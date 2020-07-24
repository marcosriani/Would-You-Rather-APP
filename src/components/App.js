import React, { Component } from 'react';
import Authenticate from './Authenticate';
import NewPoll from './NewPoll';
import PollsDashboard from './PollsDashboard';
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
      <div>
        <Authenticate />
      </div>
    );
  }
}

// const mapStateToProps = () => {

// }

export default connect(null, {
  getUsers,
  handleInitialData,
})(App);
