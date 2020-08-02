import React, { Component, Fragment } from 'react';
import { handleAddNewQuestion } from '../actions/shared';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './NewPoll.css';
import ErrorPage from './ErrorPage';

class NewPool extends Component {
  state = {
    answerOne: '',
    answerTwo: '',
  };

  answering = (e, optionNumber) => {
    optionNumber === 'optionOne' &&
      this.setState({ answerOne: e.target.value });

    optionNumber === 'optionTwo' &&
      this.setState({ answerTwo: e.target.value });
  };

  submitQuestion = (e) => {
    e.preventDefault();

    this.props.handleAddNewQuestion(
      this.state.answerOne,
      this.state.answerTwo,
      'sarahedo'
    );
    // Go back to /home after submitting new question
    this.props.history.push(`/home`);
  };

  render() {
    const { authedUser } = this.props;

    return (
      <Fragment>
        {authedUser !== null ? (
          <div className='new-poll-wrapper'>
            <div className='new-poll-header'>
              <h2>Create a New Poll</h2>
            </div>
            <div className='new-poll-questions'>
              <p>Complete the question:</p>
              <p className='new-poll-q'>Would You Rather...</p>
              <form onSubmit={this.submitQuestion}>
                <label></label>
                <div className='new-poll-input'>
                  <div>
                    <input
                      value={this.state.answerOne}
                      onChange={(e) => this.answering(e, 'optionOne')}
                      type='text'
                      placeholder='Enter option one...'
                    />
                  </div>
                  <p>------------------ OR ------------------ </p>
                  <div>
                    <input
                      value={this.state.answerTwo}
                      onChange={(e) => this.answering(e, 'optionTwo')}
                      type='text'
                      placeholder='Enter option two...'
                    />
                  </div>
                </div>

                {this.state.answerOne !== '' || this.state.answerTwo !== '' ? (
                  <button
                    disabled={
                      this.state.answerOne.length < 1 ||
                      this.state.answerTwo.length < 1
                        ? true
                        : false
                    }
                    type='submit'
                    className={`button-submit ${
                      this.state.answerOne.length < 1 ||
                      this.state.answerTwo.length < 1
                        ? 'new-poll-disabledBtn'
                        : 'new-poll-activeBtn'
                    }`}
                  >
                    Submit
                  </button>
                ) : null}
              </form>
            </div>
          </div>
        ) : (
          <ErrorPage />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default withRouter(
  connect(mapStateToProps, { handleAddNewQuestion })(NewPool)
);
