import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authenticate from './Authenticate';
import NewPoll from './NewPoll';
import PollsDashboard from './PollsDashboard';
import Poll from './Poll.js';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import ErrorPage from './ErrorPage';
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
    // This component is made to make sure the user is logged in before viewing some pages
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) =>
            this.props.authedUser ? <Component {...props} /> : <ErrorPage />
          }
        />
      );
    };

    return (
      <Router>
        <div>
          <Nav />
        </div>
        <div>
          <Route path='/' exact component={Authenticate} />
          <PrivateRoute exact path='/home' component={PollsDashboard} />
          <PrivateRoute exact path='/poll/:id' component={Poll} />
          <PrivateRoute exact path='/newPoll' component={NewPoll} />
          <PrivateRoute exact path='/leaderboard' component={Leaderboard} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps, {
  getUsers,
  handleInitialData,
})(App);
