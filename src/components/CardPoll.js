import React, { Component } from 'react';

import './CardPoll.css';

class CardPoll extends Component {
  render() {
    const { username, question, imgUrl } = this.props;

    return (
      <div className='card-poll'>
        <div className='card-poll-header'>
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
              <button>Answer Poll</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPoll;
