import React, { Component } from 'react';
import Authenticate from './Authenticate';
import NewPoll from './NewPoll';
import DashBoard from './Dashboard';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';

// CSS
import './Reset.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <NewPoll />
      </div>
    );
  }
}

// const mapStateToProps = () => {

// }

export default connect(null, { getUsers })(App);
