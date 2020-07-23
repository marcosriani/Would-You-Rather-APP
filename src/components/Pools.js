import React, { Component } from 'react';
import CardPoll from './CardPoll';

import './Polls.css';

class Polls extends Component {
  render() {
    return (
      <div className='polls'>
        <div className='polls-buttons'>
          <button className='btn-1'>Unanswered</button>
          <button className='btn-2'>Answered</button>
        </div>
        <div>
          <CardPoll
            username='Martha'
            question='Question  asdhf halksjdf  ahsd...'
            imgUrl='./avatar1.png'
          />
          <CardPoll
            username='Marcos'
            question='Question  asdhf halksjdf  ahsd...'
            imgUrl='./avatar2.png'
          />
          <CardPoll
            username='Marcelo'
            question='Question  asdhf halksjdf  ahsd...'
            imgUrl='./avatar3.png'
          />
          <CardPoll
            username='Martha'
            question='Question  asdhf halksjdf  ahsd...'
            imgUrl='./avatar1.png'
          />
        </div>
      </div>
    );
  }
}

export default Polls;
