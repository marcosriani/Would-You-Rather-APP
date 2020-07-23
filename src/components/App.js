import React, { Component } from 'react';
import Authenticate from './Authenticate';
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
        <Authenticate />
      </div>
    );
  }
}

// const mapStateToProps = () => {

// }

export default connect(null, { getUsers })(App);
