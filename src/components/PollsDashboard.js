import React, { Component } from 'react';
import CardPoll from './CardPoll';
import { connect } from 'react-redux';

import './PollsDashboard.css';

class PollsDashboard extends Component {
  state = {
    buttonClicked: 'unanswered',
  };

  formatQuestionsArray = (questionsArray, usersObj) => {
    const newArray = [];

    for (const questionObj of questionsArray) {
      newArray.push({
        id: questionObj.id,
        username: questionObj.author,
        question: questionObj.optionOne.text,
        imgUrl: usersObj[questionObj.author].avatarURL,
      });
    }

    return newArray;
  };

  render() {
    const {
      questions,
      users,
      authedUser,
      answeredQuestions,
      unansweredQuestions,
    } = this.props;

    return (
      <div className='polls-dashboard'>
        <div className='polls-buttons'>
          <button
            onClick={() => {
              this.setState({ buttonClicked: 'unanswered' });
            }}
            className={
              this.state.buttonClicked === 'unanswered'
                ? 'activeBtn'
                : 'disabledBtn'
            }
          >
            Unanswered
          </button>
          <button
            onClick={() => {
              this.setState({ buttonClicked: 'answered' });
            }}
            className={
              this.state.buttonClicked === 'answered'
                ? 'activeBtn'
                : 'disabledBtn'
            }
          >
            Answered
          </button>
        </div>
        <div>
          {this.formatQuestionsArray(
            this.state.buttonClicked === 'unanswered'
              ? unansweredQuestions
              : answeredQuestions,
            users
          ).map((item) => (
            <CardPoll
              key={item.id}
              username={item.username}
              question={item.question}
              imgUrl={item.imgUrl}
              value={authedUser}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  // Convert the object users into an array of objects
  const allQuestions = Object.values(questions);
  const newArrayQuestions = [...allQuestions];

  // Answered question
  const answeredQuestions = [];

  newArrayQuestions.forEach((question) => {
    if (
      question.optionOne.votes.find((item) => {
        return item === authedUser;
      }) !== authedUser &&
      question.optionTwo.votes.find((item) => {
        return item === authedUser;
      }) !== authedUser
    ) {
      answeredQuestions.push(question);
    }
  });

  // Unanswered question
  const unansweredQuestions = [];

  newArrayQuestions.forEach((question) => {
    if (
      question.optionOne.votes.find((item) => {
        return item === authedUser;
      }) === authedUser ||
      question.optionTwo.votes.find((item) => {
        return item === authedUser;
      }) === authedUser
    ) {
      unansweredQuestions.push(question);
    }
  });

  return {
    users,
    questions: allQuestions,
    authedUser,
    answeredQuestions,
    unansweredQuestions,
  };
};

export default connect(mapStateToProps)(PollsDashboard);
