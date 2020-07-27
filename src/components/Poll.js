import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Poll extends Component {
  render() {
    const { username, question, imgUrl } = this.props;

    console.log(imgUrl);
    return (
      <div>
        <h3> {username} asked:</h3>
        <div className='card-poll-info'>
          <div className='card-poll-img'>
            <img src={imgUrl} alt={`${username} avatar`} />
          </div>
          <div className='card-poll-data'>
            <div>
              <h4>Would you rather</h4>
              <p>{question}</p>
              {/* <p>{question.optionTwo.text}</p> */}
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

const mapStateToProps = ({ users, questions }, onwProps) => {
  const id = onwProps.match.params.id;

  console.log(
    typeof (
      Object.entries(questions).length !== 0 &&
      users[questions[id].author].avatarURL.toString()
    )
  );

  return {
    username:
      Object.entries(questions).length !== 0 &&
      users[questions[id].author].name,
    question:
      Object.entries(questions).length !== 0 && questions[id].optionOne.text,
    imgUrl:
      Object.entries(questions).length !== 0
        ? users[questions[id].author].avatarURL.toString()
        : '',
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
