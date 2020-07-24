import React, { Component } from 'react';
import CardPoll from './CardPoll';
import { connect } from 'react-redux';

import './PollsDashboard.css';

class PollsDashboard extends Component {
  render() {
    console.log(this.props.questions);

    const { questions } = this.props.questions;

    return (
      <div className='polls-dashboard'>
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

const mapStateToProps = ({ questions }) => {
  // Convert the object users into an array of objects
  const allUsers = Object.values(questions);

  return { questions: allUsers };
};

export default connect(mapStateToProps)(PollsDashboard);
