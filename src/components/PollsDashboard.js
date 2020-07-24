import React, { Component } from 'react';
import CardPoll from './CardPoll';
import { connect } from 'react-redux';

import './PollsDashboard.css';

class PollsDashboard extends Component {
  formatQuestionsArray = (questionsArray, usersArray) => {
    const newArray = [];

    for (const questionObj of questionsArray) {
      newArray.push({
        id: questionObj.id,
        username: questionObj.author,
        question: questionObj.optionOne.text,
        imgUrl: usersArray[questionObj.author].avatarURL,
      });
    }

    return newArray;
  };

  render() {
    // console.log(this.props);

    const { questions, users } = this.props;

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
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions }) => {
  // Convert the object users into an array of objects
  const allQuestions = Object.values(questions);

  return { users, questions: allQuestions };
};

export default connect(mapStateToProps)(PollsDashboard);
