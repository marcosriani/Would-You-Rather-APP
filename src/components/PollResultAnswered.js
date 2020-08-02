import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/shared';

// To add the progress bar
import { Progress } from 'semantic-ui-react';

import './PollResultAnswered.css';
import ErrorPage from './ErrorPage';

class PollResultAnswered extends Component {
  state = {
    chosenQuestion: '',
  };

  onSubmit = (e) => {
    // Update the store with the question answered, after submitting.
    e.preventDefault();

    if (this.state.chosenQuestion !== '') {
      this.props.handleAddAnswer(
        this.props.authedUser,
        this.props.id,
        this.state.chosenQuestion
      );
      this.props.history.push(`/home`);
    }
  };

  selectQuestion = (e) => {
    // Update the state every time one of the options are selected.

    this.setState({ chosenQuestion: e.target.id });
  };

  render() {
    const {
      username,
      optionOne,
      optionTwo,
      imgUrl,
      voted,
      percentageOptionOne,
      percentageOptionTwo,
      votedOptionOne,
      votedOptionTwo,
      totalVotes,
      authedUser,
    } = this.props;

    if (this.props.isWrongID) {
      return <ErrorPage />;
    }

    return (
      <Fragment>
        {authedUser !== null ? (
          <div className='poll-wrap-result'>
            <div className='header'>
              <h3> {username} asked:</h3>
            </div>
            <div className='poll-data-result'>
              <div className='poll-img-result'>
                <img src={imgUrl.slice(1)} alt={`${username} avatar`} />
              </div>
              <div className='poll-info-result'>
                <div>
                  <h3>Results:</h3>
                  <h4>Would you rather</h4>

                  <div className='options'>
                    <div
                      className={
                        voted === 'optionOne'
                          ? 'optionOne-grid optionOne'
                          : 'optionOne'
                      }
                    >
                      <div className='optionOne-text'>
                        <p>{optionOne}</p>
                      </div>

                      {voted === 'optionOne' && (
                        <div className='icon-img'>
                          <img
                            alt='vote'
                            className='vote-img'
                            src='/vote.png'
                          />
                        </div>
                      )}
                    </div>
                    <div className='percentage-answer'>
                      <Progress
                        percent={Math.floor(percentageOptionOne)}
                        inverted
                        color='blue'
                        progress
                      />
                      That is {votedOptionOne} out of {totalVotes} votes.
                    </div>
                    <div
                      className={
                        voted === 'optionTwo'
                          ? 'optionTwo-grid optionTwo'
                          : 'optionTwo'
                      }
                    >
                      <div className='optionTwo-text'>
                        <p>{optionTwo}</p>
                      </div>
                      {voted === 'optionTwo' && (
                        <div className='icon-img'>
                          <img
                            alt='vote'
                            className='vote-img'
                            src='/vote.png'
                          />
                        </div>
                      )}
                    </div>
                    <div className='percentage-answer'>
                      <Progress
                        percent={Math.floor(percentageOptionTwo)}
                        inverted
                        color='green'
                        progress
                      />
                      That is {votedOptionTwo} out of {totalVotes} votes.
                    </div>
                  </div>
                </div>

                <div className='poll-button-wrap-result'>
                  <Link to='/home'>
                    <button type='submit' className='poll-button-result'>
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ErrorPage />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, onwProps) => {
  const id = onwProps.match.params.id;
  let voted = '';
  let percentageOptionOne = '';
  let percentageOptionTwo = '';
  let optionOneLength = '';
  let optionTwoLength = '';
  let numberOfAnswer = '';

  //   To get the logged in user answer
  if (Object.entries(questions).length !== 0) {
    if (questions[id] !== undefined) {
      if (
        questions[id].optionOne.votes.find((vote) => vote === authedUser) !==
        undefined
      ) {
        voted = 'optionOne';
      } else if (
        questions[id].optionTwo.votes.find((vote) => vote === authedUser) !==
        undefined
      )
        voted = 'optionTwo';

      //   To get the percentage of each answer
      optionOneLength = questions[id].optionOne.votes.length;
      optionTwoLength = questions[id].optionTwo.votes.length;

      // How many answers the question had
      numberOfAnswer = optionOneLength + optionTwoLength;

      percentageOptionOne =
        (optionOneLength / (numberOfAnswer !== 0 && numberOfAnswer)) * 100;
      percentageOptionTwo =
        (optionTwoLength / (numberOfAnswer !== 0 && numberOfAnswer)) * 100;
    }
  }

  if (questions[id] === undefined) {
    return {
      isWrongID: true,
    };
  }

  return {
    // Make sure all the data is present before processing it.
    username:
      Object.entries(questions).length !== 0 &&
      users[questions[id].author].name,
    optionOne:
      Object.entries(questions).length !== 0 && questions[id].optionOne.text,
    optionTwo:
      Object.entries(questions).length !== 0 && questions[id].optionTwo.text,
    imgUrl:
      Object.entries(questions).length !== 0
        ? users[questions[id].author].avatarURL.toString()
        : '',
    id,
    authedUser,
    voted,
    percentageOptionOne,
    percentageOptionTwo,
    votedOptionOne: optionOneLength,
    votedOptionTwo: optionTwoLength,
    totalVotes: numberOfAnswer,
  };
};

export default withRouter(
  connect(mapStateToProps, { handleAddAnswer })(PollResultAnswered)
);
