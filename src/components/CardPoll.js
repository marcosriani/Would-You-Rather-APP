import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './CardPoll.css';

class CardPoll extends Component {
  onClickAnswer = (e) => {
    e.preventDefault();
    this.props.history.push(`/poll/${this.props.id}`);
  };

  render() {
    const { username, question, imgUrl, answerCondition } = this.props;

    return (
      <div className='card-poll'>
        <div
          className={
            'card-poll-header ' +
            (answerCondition === 'unanswered'
              ? 'card-poll-header-unanswered'
              : 'card-poll-header-answered')
          }
        >
          <h3> {username} asked:</h3>
        </div>
        <div className='card-poll-info'>
          <div className='card-poll-img'>
            <img src={imgUrl} alt='as' />
          </div>
          <div className='card-poll-data'>
            <div>
              <h4>Would you rather</h4>
              <p>{question}</p>
            </div>
            <div className='card-poll-btn'>
              <button onClick={this.onClickAnswer}>Answer Poll</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions }, onwProps) => {
  return {
    username: users[questions[onwProps.id].author].name,
    question: questions[onwProps.id].optionOne.text,
    imgUrl: users[questions[onwProps.id].author].avatarURL,
    answerCondition: onwProps.answerCondition,
  };
};

export default withRouter(connect(mapStateToProps)(CardPoll));
