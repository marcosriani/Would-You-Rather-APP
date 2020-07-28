import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/shared';

import './Poll.css';

class Poll extends Component {
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
    const { username, optionOne, optionTwo, imgUrl } = this.props;

    return (
      <div className='poll-wrap'>
        <h3> {username} asked:</h3>
        <div className='poll-data'>
          <div className='poll-img'>
            <img src={imgUrl.slice(1)} alt={`${username} avatar`} />
          </div>
          <div className='poll-info'>
            <h4>Would you rather</h4>
            <form
              className='form-data'
              onChange={this.selectQuestion}
              onSubmit={this.onSubmit}
            >
              <div>
                <input
                  type='radio'
                  id='optionOne'
                  name='gender'
                  value={optionOne}
                  className='input-item'
                />
                <label htmlFor='optionOne'>{optionOne}</label>
                <br />
                <input
                  type='radio'
                  id='optionTwo'
                  name='gender'
                  value={optionTwo}
                  className='input-item'
                />
                <label htmlFor='optionTwo'>{optionTwo}</label>
              </div>

              <div className='poll-button-wrap'>
                <button type='submit' className='poll-button'>
                  Answer Poll
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, onwProps) => {
  const id = onwProps.match.params.id;

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
  };
};

export default withRouter(connect(mapStateToProps, { handleAddAnswer })(Poll));
