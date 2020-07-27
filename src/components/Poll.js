import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Poll.css';

class Poll extends Component {
  render() {
    const { username, questionOne, questionTwo, imgUrl, id } = this.props;

    console.log(imgUrl);
    return (
      <div className='poll-wrap'>
        <h3> {username} asked:</h3>
        <div className='poll-data'>
          <div className='poll-img'>
            <img src={imgUrl.slice(1)} alt={`${username} avatar`} />
          </div>
          <div>
            <div>
              <h4>Would you rather</h4>
              <form className='form-data'>
                <div>
                  <input
                    type='radio'
                    id='questionOne'
                    name='gender'
                    value={questionOne}
                  />
                  <label htmlFor='questionOne'>{questionOne}</label>
                  <br />
                  <input
                    type='radio'
                    id='questionTwo'
                    name='gender'
                    value={questionTwo}
                  />
                  <label htmlFor='questionTwo'>{questionTwo}</label>
                </div>

                <div className='poll-button-wrap'>
                  <button className='poll-button'>Answer Poll</button>
                </div>
              </form>
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
    questionOne:
      Object.entries(questions).length !== 0 && questions[id].optionOne.text,
    questionTwo:
      Object.entries(questions).length !== 0 && questions[id].optionTwo.text,
    imgUrl:
      Object.entries(questions).length !== 0
        ? users[questions[id].author].avatarURL.toString()
        : '',
    id,
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
