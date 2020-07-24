import React, { Component } from 'react';
import CardPoll from './CardPoll';
import { connect } from 'react-redux';

import './PollsDashboard.css';

class PollsDashboard extends Component {
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
    const { questions, users, authedUser } = this.props;

    return (
      <div className='polls-dashboard'>
        <div className='polls-buttons'>
          <button className='btn-1'>Unanswered</button>
          <button className='btn-2'>Answered</button>
        </div>
        <div>
          {this.formatQuestionsArray(questions, users).map((item) => (
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

  return { users, questions: allQuestions, authedUser };
};

export default connect(mapStateToProps)(PollsDashboard);
